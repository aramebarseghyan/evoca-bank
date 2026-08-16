import React, { useEffect, useRef, useState } from "react";

const PeerCallModal = ({
  currentUserUid,
  targetUserUid,
  targetUserName,
  peerInstance,
  incomingCallInit,
  clearIncomingCall,
  onClose,
}) => {
  const [callStatus, setCallStatus] = useState("Սկզբնավորում...");
  const [isCalling, setIsCalling] = useState(false);
  const [incomingCall, setIncomingCall] = useState(incomingCallInit || null);
  const [localStream, setLocalStream] = useState(null);

  const remoteAudioRef = useRef(null);
  const activeCallRef = useRef(null);

  // Մաքրում ենք ID-ն և ապահովում chat-user- նախածանցը
  const cleanTargetUid = targetUserUid?.replace("chat-user-", "") || "";
  const targetPeerId = `chat-user-${cleanTargetUid}`;

  useEffect(() => {
    if (!peerInstance) {
      setCallStatus("Peer Կապը բացակայում է...");
      return;
    }

    // Եթե սա մուտքային զանգ է, սպասում ենք օգտատիրոջ պատասխանին
    if (incomingCallInit) {
      setCallStatus("Մուտքային զանգ...");
    } else {
      // Հակառակ դեպքում սկսում ենք ելքային զանգ
      startCall();
    }

    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const startCall = async () => {
    if (!peerInstance) return;
    try {
      setCallStatus("Միկրոֆոնի հասանելիության ստացում...");
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      setLocalStream(stream);

      setCallStatus(`Զանգում ենք ${targetUserName}-ին...`);
      setIsCalling(true);

      const call = peerInstance.call(targetPeerId, stream);
      activeCallRef.current = call;

      call.on("stream", (remoteStream) => {
        setCallStatus("Զրույցն ընթացքի մեջ է");
        if (remoteAudioRef.current) {
          remoteAudioRef.current.srcObject = remoteStream;
          remoteAudioRef.current
            .play()
            .catch((e) => console.log("Աուդիոյի նվագարկման սխալ.", e));
        }
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
      console.error("Միկրոֆոնի սխալ:", err);
      setCallStatus("Չհաջողվեց ստանալ միկրոֆոնի հասանելիություն");
    }
  };

  const answerCall = async () => {
    const callToAnswer = incomingCall || incomingCallInit;
    if (!callToAnswer) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      setLocalStream(stream);

      callToAnswer.answer(stream);
      activeCallRef.current = callToAnswer;
      setIncomingCall(null);
      if (clearIncomingCall) clearIncomingCall();

      setCallStatus("Զրույցն ընթացքի մեջ է");
      setIsCalling(true);

      callToAnswer.on("stream", (remoteStream) => {
        if (remoteAudioRef.current) {
          remoteAudioRef.current.srcObject = remoteStream;
          remoteAudioRef.current
            .play()
            .catch((e) => console.log("Աուդիոյի նվագարկման սխալ.", e));
        }
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

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center backdrop-blur-sm">
      <audio ref={remoteAudioRef} autoPlay />

      <div className="bg-white rounded-2xl p-6 w-[320px] shadow-2xl flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-4 text-blue-600 font-bold">
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
          <button
            onClick={hangUp}
            className="w-full bg-red-500 text-white py-3 rounded-xl font-medium hover:bg-red-600 transition-colors shadow-md flex items-center justify-center gap-2"
          >
            <span>🔴 Ավարտել զանգը</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default PeerCallModal;
