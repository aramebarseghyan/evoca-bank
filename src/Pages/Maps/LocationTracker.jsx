import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
// ВНИМАНИЕ: проверь правильность пути до твоего файла firebase.js
import { db } from "../../firebase";

const LocationTracker = () => {
  useEffect(() => {
    const auth = getAuth();
    let watchId = null;

    // Слушаем, вошел ли пользователь в систему
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if ("geolocation" in navigator) {
          // Используем watchPosition для моментального срабатывания при разрешении
          watchId = navigator.geolocation.watchPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              try {
                const userRef = doc(db, "users", user.uid);

                // setDoc + { merge: true } создает или обновляет документ без багов.
                // Также мы теперь сохраняем photoURL профиля!
                await setDoc(
                  userRef,
                  {
                    isOnline: true,
                    photoURL: user.photoURL || null,
                    location: {
                      lat: latitude,
                      lng: longitude,
                    },
                  },
                  { merge: true },
                );
              } catch (error) {
                console.error("Ошибка при записи локации в БД:", error);
              }
            },
            async (error) => {
              console.warn(
                "Пользователь запретил доступ или ошибка GPS:",
                error.message,
              );
              // Если нет GPS, просто ставим статус онлайн и сохраняем фото
              try {
                const userRef = doc(db, "users", user.uid);
                await setDoc(
                  userRef,
                  {
                    isOnline: true,
                    photoURL: user.photoURL || null,
                  },
                  { merge: true },
                );
              } catch (err) {
                console.error("Ошибка при обновлении статуса:", err);
              }
            },
            {
              enableHighAccuracy: false, // Более мягкие требования, чтобы работало на ПК
              maximumAge: 30000,
              timeout: 27000,
            },
          );
        }
      } else {
        if (watchId !== null) {
          navigator.geolocation.clearWatch(watchId);
        }
      }
    });

    // Очистка при размонтировании
    return () => {
      unsubscribeAuth();
      if (watchId !== null && "geolocation" in navigator) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  return null;
};

export default LocationTracker;
