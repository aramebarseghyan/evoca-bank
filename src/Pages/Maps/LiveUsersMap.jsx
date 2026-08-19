import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import ScrollHeader from "../../components/Header/ScrollHeader";

// 1. КОМПОНЕНТ АВТО-ЦЕНТРИРОВАНИЯ
const AutoZoomToBounds = ({ users }) => {
  const map = useMap();

  useEffect(() => {
    if (users && users.length > 0) {
      const bounds = L.latLngBounds(
        users.map((u) => [u.location.lat, u.location.lng]),
      );
      map.fitBounds(bounds, { padding: [60, 60], maxZoom: 15, animate: true });
    }
  }, [map, users]);

  return null;
};

// 2. ФУНКЦИЯ СОЗДАНИЯ ИКОНОК
const createGmailAvatar = (user) => {
  const isOnline = user.isOnline;
  const statusColor = isOnline ? "#10b981" : "#ef4444"; // Зеленый / Красный

  let innerContent = "";
  if (user.photoURL) {
    innerContent = `
      <img 
        src="${user.photoURL}" 
        alt="avatar" 
        style="width: 100%; height: 100%; object-fit: cover;" 
        referrerpolicy="no-referrer" 
      />
    `;
  } else {
    // Безопасное получение начальной буквы
    const name = user.displayName || user.email || "Ա";
    const initial = name.length > 0 ? name.charAt(0).toUpperCase() : "Ա";

    const colors = [
      "#ef4444",
      "#f97316",
      "#f59e0b",
      "#84cc16",
      "#10b981",
      "#06b6d4",
      "#3b82f6",
      "#8b5cf6",
      "#d946ef",
      "#f43f5e",
    ];
    const charCode = initial.charCodeAt(0);
    const bgColor = colors[charCode % colors.length] || colors[0];

    innerContent = `
      <div style="
        width: 100%; 
        height: 100%; 
        background-color: ${bgColor}; 
        color: white; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        font-family: sans-serif;
        font-weight: 800; 
        font-size: 18px;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
      ">
        ${initial}
      </div>
    `;
  }

  return L.divIcon({
    className: "custom-avatar-icon",
    html: `
      <div style="position: relative; width: 42px; height: 42px;">
        <div style="
          width: 42px; 
          height: 42px; 
          border-radius: 50%; 
          border: 3px solid white;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          overflow: hidden;
          background-color: white;
          position: relative;
          z-index: 10;
        ">
          ${innerContent}
        </div>
        
        <div style="
          position: absolute;
          bottom: 0px;
          right: 0px;
          width: 13px;
          height: 13px;
          background-color: ${statusColor};
          border: 2px solid white;
          border-radius: 50%;
          z-index: 20;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        "></div>
      </div>
      <div style="
        width: 0; 
        height: 0; 
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 10px solid white;
        margin: -4px auto 0;
        filter: drop-shadow(0 4px 2px rgba(0,0,0,0.2));
        position: relative;
        z-index: 5;
      "></div>
    `,
    iconSize: [42, 52],
    iconAnchor: [21, 52],
    popupAnchor: [0, -52],
  });
};

const LiveUsersMap = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const usersRef = collection(db, "users");

    const unsubscribe = onSnapshot(
      usersRef,
      (snapshot) => {
        const usersData = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data?.location?.lat && data?.location?.lng) {
            usersData.push({ id: doc.id, ...data });
          }
        });
        setAllUsers(usersData);
        setIsLoading(false);
      },
      (error) => {
        console.error("Error fetching users: ", error);
        setIsLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  const filteredUsers = allUsers.filter((user) => {
    if (filter === "online") return user.isOnline === true;
    if (filter === "offline") return user.isOnline !== true;
    return true;
  });

  return (
    <div className="w-full h-screen overflow-hidden bg-[#F8F9FA] flex flex-col font-sans selection:bg-purple-200">
      <ScrollHeader onOpenMenu={() => {}} />

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-[60px] lg:pt-[64px] pb-4 md:pb-6 flex flex-col gap-4">
        {/* Header Section */}
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

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex bg-gray-100 p-1 rounded-2xl border border-gray-200/60">
              <button
                onClick={() => setFilter("all")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === "all"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Բոլորը ({allUsers.length})
              </button>
              <button
                onClick={() => setFilter("online")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === "online"
                    ? "bg-emerald-600 text-white shadow-sm shadow-emerald-600/30"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Առցանց
              </button>
              <button
                onClick={() => setFilter("offline")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === "offline"
                    ? "bg-red-500 text-white shadow-sm shadow-red-500/30"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Օֆլայն
              </button>
            </div>

            <div className="relative z-10 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-5 py-2.5 rounded-2xl font-bold shadow-lg shadow-purple-600/30">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              <span className="text-xs md:text-sm">Առցանց՝</span>
              <span className="text-lg font-black">
                {allUsers.filter((u) => u.isOnline).length}
              </span>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex-1 relative w-full rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border-[6px] border-white z-0 bg-gray-50">
          {isLoading ? (
            null
          ) : (
            <MapContainer
              center={[40.1811, 44.5136]}
              zoom={12}
              className="w-full h-full z-0"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />

              <AutoZoomToBounds users={filteredUsers} />

              {filteredUsers.map((user) => {
                const displayName =
                  user.displayName || user.email || "Անհայտ օգտատեր";
                const initial = displayName.charAt(0).toUpperCase();

                return (
                  <Marker
                    key={user.id}
                    position={[user.location.lat, user.location.lng]}
                    icon={createGmailAvatar(user)}
                  >
                    <Popup className="rounded-2xl shadow-2xl border-none">
                      <div className="flex flex-col items-center p-3 min-w-[140px]">
                        {user.photoURL ? (
                          <img
                            src={user.photoURL}
                            alt="Profile"
                            className="w-12 h-12 rounded-full border-2 border-purple-100 mb-3 object-cover shadow-sm"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-3 shadow-inner">
                            <span className="text-purple-700 font-black text-xl">
                              {initial}
                            </span>
                          </div>
                        )}

                        <span className="font-extrabold text-gray-800 text-center text-sm mb-2">
                          {displayName}
                        </span>

                        {user.isOnline ? (
                          <div className="text-xs font-bold text-emerald-600 flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100/50">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Առցանց (Online)
                          </div>
                        ) : (
                          <div className="text-xs font-bold text-red-500 flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-full border border-red-100/50">
                            <span className="relative flex h-2 w-2">
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            Օֆլայն (Offline)
                          </div>
                        )}
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          )}
        </div>
      </main>
    </div>
  );
};

export default LiveUsersMap;
