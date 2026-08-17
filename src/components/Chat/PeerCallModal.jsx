import React, { useEffect, useRef, useState } from "react";

const PeerCallModal = ({
  currentUserUid,
  targetUserUid,
  targetUserName,
  peerInstance,
  incomingCallInit,
  clearIncomingCall,
  onClose,
  callType,
}) => {
  const [callStatus, setCallStatus] = useState("Սկզբնավորում...");
  const [isCalling, setIsCalling] = useState(false);
  const [incomingCall, setIncomingCall] = useState(incomingCallInit || null);

  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);

  // Стейты для управления микрофоном и камерой
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  const actualCallType =
    incomingCallInit?.metadata?.callType || callType || "audio";

  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const remoteAudioRef = useRef(null);
  const activeCallRef = useRef(null);

  const cleanTargetUid = targetUserUid?.replace("chat-user-", "") || "";
  const targetPeerId = `chat-user-${cleanTargetUid}`;

  useEffect(() => {
    if (!peerInstance) {
      setCallStatus("Peer Կապը բացակայում է...");
      return;
    }

    if (incomingCallInit) {
      setCallStatus(
        actualCallType === "video"
          ? "Մուտքային վիդեոզանգ..."
          : "Մուտքային զանգ...",
      );
    } else {
      startCall();
    }

    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (localStream && actualCallType === "video" && localVideoRef.current) {
      localVideoRef.current.srcObject = localStream;
    }
  }, [localStream, actualCallType]);

  useEffect(() => {
    if (remoteStream) {
      if (actualCallType === "video" && remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = remoteStream;
      } else if (actualCallType === "audio" && remoteAudioRef.current) {
        remoteAudioRef.current.srcObject = remoteStream;
      }
    }
  }, [remoteStream, actualCallType]);

  const startCall = async () => {
    if (!peerInstance) return;
    try {
      setCallStatus(
        actualCallType === "video"
          ? "Տեսախցիկի և միկրոֆոնի հասանելիության ստացում..."
          : "Միկրոֆոնի հասանելիության ստացում...",
      );

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: actualCallType === "video",
      });
      setLocalStream(stream);

      setCallStatus(`Զանգում ենք ${targetUserName}-ին...`);
      setIsCalling(true);

      const call = peerInstance.call(targetPeerId, stream, {
        metadata: { callType: actualCallType },
      });
      activeCallRef.current = call;

      call.on("stream", (userStream) => {
        setCallStatus("Զրույցն ընթացքի մեջ է");
        setRemoteStream(userStream);
      });

      call.on("close", () => {
        setCallStatus("Զանգն ավարտված է");
        setTimeout(onClose, 1500);
      });

      call.on("error", (err) => {
        console.error("Զանգի սխալ:", err);
        setCallStatus("Զանգի սխալ: " + err.message);
      });
    } catch (err) {
      console.error("Մեդիայի սխալ:", err);
      setCallStatus("Չհաջողվեց ստանալ սարքերի հասանելիություն");
    }
  };

  const answerCall = async () => {
    const callToAnswer = incomingCall || incomingCallInit;
    if (!callToAnswer) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: actualCallType === "video",
      });
      setLocalStream(stream);

      callToAnswer.answer(stream);
      activeCallRef.current = callToAnswer;
      setIncomingCall(null);
      if (clearIncomingCall) clearIncomingCall();

      setCallStatus("Զրույցն ընթացքի մեջ է");
      setIsCalling(true);

      callToAnswer.on("stream", (userStream) => {
        setRemoteStream(userStream);
      });

      callToAnswer.on("close", () => {
        setCallStatus("Զանգն ավարտված է");
        setTimeout(onClose, 1500);
      });
    } catch (err) {
      console.error("Պատասխանելու սխալ:", err);
    }
  };

  const hangUp = () => {
    if (activeCallRef.current) {
      activeCallRef.current.close();
    }
    if (incomingCallInit && clearIncomingCall) {
      clearIncomingCall();
    }
    if (localStream) {
      localStream.getTracks().forEach((track) => track.stop());
    }
    onClose();
  };

  // 🎤 Функция включения/выключения микрофона
  const toggleAudio = () => {
    if (localStream) {
      localStream.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
      setIsMuted(!isMuted);
    }
  };

  // 📹 Функция включения/выключения камеры
  const toggleVideo = () => {
    if (localStream) {
      localStream.getVideoTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
      setIsVideoOff(!isVideoOff);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm ${actualCallType === "video" ? "bg-black/90" : "bg-black/70"}`}
    >
      {/* ИНТЕРФЕЙС АУДИОЗВОНКА */}
      {actualCallType === "audio" && (
        <div className="bg-white rounded-2xl p-6 w-[320px] shadow-2xl flex flex-col items-center text-center">
          <audio ref={remoteAudioRef} autoPlay />

          <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-4 text-blue-600 font-bold animate-pulse">
            {targetUserName ? targetUserName[0].toUpperCase() : "👤"}
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-1">
            {targetUserName}
          </h3>
          <p className="text-sm text-gray-500 mb-6">{callStatus}</p>

          {(incomingCall || incomingCallInit) && !isCalling && (
            <div className="flex gap-4 w-full mb-4">
              <button
                onClick={answerCall}
                className="flex-1 bg-green-500 text-white py-2.5 rounded-xl font-medium hover:bg-green-600 transition-colors shadow-md"
              >
                Պատասխանել
              </button>
              <button
                onClick={hangUp}
                className="flex-1 bg-red-500 text-white py-2.5 rounded-xl font-medium hover:bg-red-600 transition-colors shadow-md"
              >
                Մերժել
              </button>
            </div>
          )}

          {((!incomingCall && !incomingCallInit) || isCalling) && (
            <div className="flex flex-col gap-3 w-full">
              {/* Кнопка мута микрофона для аудиозвонка */}
              <button
                onClick={toggleAudio}
                className={`w-full py-2.5 rounded-xl font-medium transition-colors shadow-md text-white flex items-center justify-center gap-2 ${
                  isMuted
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-gray-700 hover:bg-gray-800"
                }`}
              >
                <span>
                  {isMuted ? "🔇 Միկրոֆոնն անջատված է" : "🎤 Անջատել միկրոֆոնը"}
                </span>
              </button>

              <button
                onClick={hangUp}
                className="w-full bg-red-500 text-white py-3 rounded-xl font-medium hover:bg-red-600 transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>🔴 Ավարտել զանգը</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* ИНТЕРФЕЙС ВИДЕОЗВОНКА */}
      {actualCallType === "video" && (
        <div className="relative w-full h-full sm:max-w-[90vw] sm:max-h-[90vh] bg-gray-900 sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center justify-center">
          {/* Видео собеседника */}
          {remoteStream && (
            <video
              ref={remoteVideoRef}
              autoPlay
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Экран ожидания */}
          {(!remoteStream || callStatus !== "Զրույցն ընթացքի մեջ է") && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80 z-10 backdrop-blur-sm">
              <div className="w-24 h-24 bg-blue-500/20 rounded-3xl flex items-center justify-center text-5xl mb-6 text-blue-400 animate-pulse">
                {targetUserName ? targetUserName[0].toUpperCase() : "📹"}
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">
                {targetUserName}
              </h3>
              <p className="text-gray-300 font-medium mb-10">{callStatus}</p>

              {(incomingCall || incomingCallInit) && !isCalling && (
                <div className="flex gap-8">
                  <button
                    onClick={answerCall}
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all hover:scale-110 shadow-lg"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </button>
                  <button
                    onClick={hangUp}
                    className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-all hover:scale-110 shadow-lg"
                  >
                    <svg
                      className="w-8 h-8 transform rotate-[135deg]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Твое видео (Picture-in-Picture) */}
          {localStream && (
            <div className="absolute bottom-28 right-6 w-32 h-44 sm:w-48 sm:h-64 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 z-20 flex items-center justify-center">
              {/* Если камера выключена, показываем заглушку */}
              {isVideoOff ? (
                <div className="text-gray-400 text-sm flex flex-col items-center">
                  <span>📷</span>
                  <span className="text-xs mt-1">Տեսախցիկն անջատված է</span>
                </div>
              ) : (
                <video
                  ref={localVideoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover transform scale-x-[-1]"
                />
              )}
            </div>
          )}

          {/* Панель управления внизу (Микрофон, Сброс, Камера) */}
          {isCalling && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 bg-gray-800/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-700 shadow-xl">
              {/* Кнопка микрофона */}
              <button
                onClick={toggleAudio}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all hover:scale-105 ${
                  isMuted
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                title={isMuted ? "Включить микрофон" : "Выключить микрофон"}
              >
                {isMuted ? "🔇" : "🎤"}
              </button>

              {/* Кнопка сброса */}
              <button
                onClick={hangUp}
                className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:scale-110"
                title="Завершить звонок"
              >
                <svg
                  className="w-7 h-7 transform rotate-[135deg]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </button>

              {/* Кнопка камеры */}
              <button
                onClick={toggleVideo}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all hover:scale-105 ${
                  isVideoOff
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                title={isVideoOff ? "Включить камеру" : "Выключить камеру"}
              >
                {isVideoOff ? "📷❌" : "📹"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PeerCallModal;
