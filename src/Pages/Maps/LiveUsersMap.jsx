import React, { useState, useEffect } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

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

    const unsubscribe = onSnapshot(
      activeUsersQuery,
      (snapshot) => {
        const usersData = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.location && data.location.lat && data.location.lng) {
            usersData.push({ id: doc.id, ...data });
          }
        });
        setActiveUsers(usersData);
        setIsLoading(false);
      },
      (error) => {
        console.error("Error fetching live users: ", error);
        setIsLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center bg-gray-50 my-6 rounded-2xl">
        <div className="text-xl font-semibold text-gray-600 animate-pulse">
          Loading Map Interface...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Banner / Status */}
      <div className="flex items-center justify-between mb-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-gray-800">
          Онлайн пользователи на карте
        </h2>
        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
          {activeUsers.length} Active Now
        </span>
      </div>

      {/* Map Container */}
      <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-md border border-gray-200 relative z-0">
        <MapContainer
          center={[40.1811, 44.5136]}
          zoom={13}
          className="w-full h-full"
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
              <Popup>
                <div className="flex flex-col items-center p-1">
                  <span className="font-bold text-gray-800">
                    {user.displayName || "Пользователь"}
                  </span>
                  <span className="text-xs font-medium text-green-600 mt-1 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                    Online
                  </span>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default LiveUsersMap;
