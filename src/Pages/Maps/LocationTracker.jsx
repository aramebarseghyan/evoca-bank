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
          // ИСПОЛЬЗУЕМ АГРЕССИВНЫЕ НАСТРОЙКИ ДЛЯ БЫСТРОГО ОБНОВЛЕНИЯ
          watchId = navigator.geolocation.watchPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              try {
                const userRef = doc(db, "users", user.uid);

                // setDoc + { merge: true } обновляет данные без перезаписи всего документа
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
              console.warn("Ошибка GPS:", error.message);
              // Если ошибка, пробуем хотя бы обновить статус онлайн
              try {
                const userRef = doc(db, "users", user.uid);
                await setDoc(
                  userRef,
                  { isOnline: true, photoURL: user.photoURL || null },
                  { merge: true },
                );
              } catch (err) {
                console.error("Ошибка при обновлении статуса:", err);
              }
            },
            {
              enableHighAccuracy: true, // Включаем GPS на максимум
              maximumAge: 0, // ОТКЛЮЧАЕМ КЭШ (всегда свежие данные)
              timeout: 5000, // Ждем ответ не более 5 секунд
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
