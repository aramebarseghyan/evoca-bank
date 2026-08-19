import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";
// ВНИМАНИЕ: проверь правильность пути до твоего файла firebase.js
import { db } from "../../firebase";

const LocationTracker = () => {
  useEffect(() => {
    const auth = getAuth();
    let watchId = null;
    let currentUser = null;

    // Функция для установки статуса "Офлайн"
    const setOfflineStatus = () => {
      if (currentUser) {
        const userRef = doc(db, "users", currentUser.uid);
        // Используем updateDoc, чтобы не перезаписывать другие данные
        updateDoc(userRef, { isOnline: false }).catch((err) =>
          console.error("Ошибка при установке офлайн:", err),
        );
      }
    };

    // Слушаем скрытие/показ вкладки (например, когда свернули браузер на телефоне)
    const handleVisibilityChange = () => {
      if (!currentUser) return;
      const userRef = doc(db, "users", currentUser.uid);

      if (document.visibilityState === "hidden") {
        updateDoc(userRef, { isOnline: false }).catch(console.error);
      } else if (document.visibilityState === "visible") {
        updateDoc(userRef, { isOnline: true }).catch(console.error);
      }
    };

    // Слушаем закрытие вкладки/браузера
    const handleBeforeUnload = () => {
      setOfflineStatus();
    };

    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      currentUser = user; // Сохраняем текущего юзера для слушателей

      if (user) {
        const userRef = doc(db, "users", user.uid);

        // При входе сразу ставим онлайн
        await setDoc(userRef, { isOnline: true }, { merge: true });

        // Подписываемся на события браузера
        window.addEventListener("beforeunload", handleBeforeUnload);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        if ("geolocation" in navigator) {
          watchId = navigator.geolocation.watchPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              try {
                await setDoc(
                  userRef,
                  {
                    isOnline: true, // Обновляем онлайн при каждом движении
                    photoURL: user.photoURL || null,
                    displayName: user.displayName || null,
                    email: user.email || null,
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
              // Если GPS не работает, всё равно оставляем статус онлайн
              try {
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
              enableHighAccuracy: true,
              maximumAge: 0,
              timeout: 5000,
            },
          );
        }
      } else {
        // Если юзер разлогинился
        if (watchId !== null) {
          navigator.geolocation.clearWatch(watchId);
        }
        window.removeEventListener("beforeunload", handleBeforeUnload);
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange,
        );
      }
    });

    // Очистка при размонтировании компонента (когда пользователь уходит с карты на другую страницу)
    return () => {
      setOfflineStatus(); // Ставим офлайн при выходе из компонента
      unsubscribeAuth();
      if (watchId !== null && "geolocation" in navigator) {
        navigator.geolocation.clearWatch(watchId);
      }
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
};

export default LocationTracker;
