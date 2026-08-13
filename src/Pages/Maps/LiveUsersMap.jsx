import React, { useState, useEffect } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import ScrollHeader from "../../components/Header/ScrollHeader";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Фикс иконок для react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const LiveUsersMap = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const usersRef = collection(db, "users");
    const activeUsersQuery = query(usersRef, where("isOnline", "==", true));

    // onSnapshot автоматически и моментально реагирует на изменения в базе
    const unsubscribe = onSnapshot(
      activeUsersQuery,
      (snapshot) => {
        const usersData = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          // Безопасная проверка наличия координат (защита от багов)
          if (data?.location?.lat && data?.location?.lng) {
            usersData.push({ id: doc.id, ...data });
          }
        });
        setActiveUsers(usersData);
        setIsLoading(false);
      },
      (error) => {
        console.error("Ошибка при загрузке пользователей: ", error);
        setIsLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-[#F8F9FA] flex flex-col font-sans selection:bg-purple-200">
      <ScrollHeader onOpenMenu={() => {}} />

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-[60px] lg:pt-[64px] pb-4 md:pb-6 flex flex-col gap-4">
        <div className="flex-shrink-0 relative overflow-hidden flex flex-col sm:flex-row justify-between items-center sm:items-center gap-4 bg-white p-5 md:p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-purple-50">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-purple-400/10 blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-400/10 blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 w-full sm:w-auto text-center sm:text-left">
            <h1 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-purple-900 tracking-tight mb-1">
              Օգտատերերի քարտեզ
            </h1>
            <p className="text-xs md:text-sm text-gray-500 font-medium">
              Ակտիվության հետևում իրական ժամանակում
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 hover:-translate-y-0.5 cursor-default w-full sm:w-auto">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className="tracking-wide text-sm md:text-base">
              Այժմ առցանց են՝
            </span>
            <span className="text-xl md:text-2xl ml-1 font-black">
              {activeUsers.length}
            </span>
          </div>
        </div>

        <div className="flex-1 relative w-full rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border-[6px] border-white z-0 bg-gray-50">
          {isLoading ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-white/80 backdrop-blur-md space-y-5">
              <div className="relative flex justify-center items-center">
                <div className="absolute animate-ping w-16 h-16 rounded-full bg-purple-400 opacity-20"></div>
                <div className="w-12 h-12 border-4 border-purple-100 border-t-purple-600 rounded-full animate-spin"></div>
              </div>
              <span className="text-purple-900/60 font-semibold tracking-wide animate-pulse">
                Քարտեզի բեռնում...
              </span>
            </div>
          ) : (
            <MapContainer
              center={[40.1811, 44.5136]}
              zoom={13}
              className="w-full h-full z-0"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              {activeUsers.map((user) => (
                <Marker
                  key={user.id}
                  position={[user.location.lat, user.location.lng]}
                >
                  <Popup className="rounded-2xl shadow-2xl border-none">
                    <div className="flex flex-col items-center p-3 min-w-[140px]">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-3 shadow-inner">
                        <span className="text-purple-700 font-black text-xl">
                          {(user.displayName || "Ա").charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <span className="font-extrabold text-gray-800 text-center text-sm mb-2">
                        {user.displayName || "Անհայտ օգտատեր"}
                      </span>
                      <div className="text-xs font-bold text-emerald-600 flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100/50">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Առցանց
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </div>
      </main>
    </div>
  );
};

export default LiveUsersMap;
