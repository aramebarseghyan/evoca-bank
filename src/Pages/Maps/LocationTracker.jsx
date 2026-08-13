import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Изменили updateDoc на setDoc
import { db } from "../../firebase";

const LocationTracker = () => {
  useEffect(() => {
    const auth = getAuth();
    let watchId = null; // ID для отслеживания геопозиции

    // Слушаем, вошел ли пользователь в систему
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if ("geolocation" in navigator) {
          // Используем watchPosition вместо getCurrentPosition.
          // Он сработает МОМЕНТАЛЬНО, как только дадут доступ.
          watchId = navigator.geolocation.watchPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              try {
                const userRef = doc(db, "users", user.uid);

                // setDoc + { merge: true } создаст документ, если его нет,
                // или обновит только переданные поля, если он есть. Без багов.
                await setDoc(
                  userRef,
                  {
                    isOnline: true,
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
              // Если нет GPS, просто ставим статус онлайн
              try {
                const userRef = doc(db, "users", user.uid);
                await setDoc(userRef, { isOnline: true }, { merge: true });
              } catch (err) {
                console.error("Ошибка при обновлении статуса:", err);
              }
            },
            {
              enableHighAccuracy: true, // Максимальная точность
              maximumAge: 0, // Не использовать кэшированную позицию
              timeout: 10000, // Ждать 10 секунд
            },
          );
        }
      } else {
        // Опционально: если юзер вышел из системы (logout), можно останавливать слежение
        if (watchId !== null) {
          navigator.geolocation.clearWatch(watchId);
        }
      }
    });

    // Очистка при размонтировании компонента (уходе со страницы)
    return () => {
      unsubscribeAuth();
      if (watchId !== null && "geolocation" in navigator) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  return null; // Ничего не рендерим
};

export default LocationTracker;
