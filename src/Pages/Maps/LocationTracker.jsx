import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";

import { db } from "../../firebase";

const LocationTracker = () => {
  useEffect(() => {
    const auth = getAuth();
    let watchId = null;
    let currentUser = null;

    const setOfflineStatus = () => {
      if (currentUser) {
        const userRef = doc(db, "users", currentUser.uid);
     
        updateDoc(userRef, { isOnline: false }).catch((err) =>
          console.error("Error switching to offline:", err),
        );
      }
    };


    const handleVisibilityChange = () => {
      if (!currentUser) return;
      const userRef = doc(db, "users", currentUser.uid);

      if (document.visibilityState === "hidden") {
        updateDoc(userRef, { isOnline: false }).catch(console.error);
      } else if (document.visibilityState === "visible") {
        updateDoc(userRef, { isOnline: true }).catch(console.error);
      }
    };


    const handleBeforeUnload = () => {
      setOfflineStatus();
    };

    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {

      if (user) {
        const userRef = doc(db, "users", user.uid);


        await setDoc(userRef, { isOnline: true }, { merge: true });


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
                console.error("Error saving location to the database:", error);
              }
            },
            async (error) => {
              console.warn("GPS error:", error.message);

              try {
                await setDoc(
                  userRef,
                  { isOnline: true, photoURL: user.photoURL || null },
                  { merge: true },
                );
              } catch (err) {
                console.error("Error updating status:", err);
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


    return () => {
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
