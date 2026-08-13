import React, { useEffect, useState } from "react";
import { useAuthStore } from "./authStore";
import { auth } from "../../firebase";
import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const AuthModal = () => {
  const { isAuthModalOpen, closeAuthModal, user, setUser } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

  // Блокируем скролл страницы при открытой модалке
  useEffect(() => {
    if (isAuthModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isAuthModalOpen]);

  if (!isAuthModalOpen) return null;

  // Логика выхода
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    } finally {
      setUser(null);
      closeAuthModal();
    }
  };

  // Логика входа (Google)
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      // После успешного входа можно сразу закрыть модалку:
      // closeAuthModal();
    } catch (error) {
      console.error("Ошибка при входе:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-opacity animate-in fade-in duration-200"
      onClick={closeAuthModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[380px] bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] overflow-hidden mx-4 animate-in zoom-in-95 duration-200"
      >
        {/* Кнопка закрытия */}
        <button
          type="button"
          onClick={closeAuthModal}
          className="absolute top-4 right-4 z-10 text-white/90 hover:text-white bg-black/10 hover:bg-black/30 backdrop-blur-md rounded-full p-2 transition-all cursor-pointer"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Верхняя шапка */}
        <div className="h-28 bg-gradient-to-r from-[#6000ff] via-[#7526ff] to-[#8f4dff] relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:12px_12px]"></div>
        </div>

        <div className="px-8 pb-8 pt-0 flex flex-col items-center relative">
          {user ? (
            /* ================= СТАДИЯ 1: ПОЛЬЗОВАТЕЛЬ АВТОРИЗОВАН ================= */
            <>
              {/* Аватар */}
              <div className="-mt-12 mb-4 relative">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Avatar"
                    referrerPolicy="no-referrer"
                    className="w-24 h-24 rounded-full object-cover border-[5px] border-white shadow-lg bg-white"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#6000ff] to-[#8f4dff] text-white flex items-center justify-center font-bold text-3xl border-[5px] border-white shadow-lg">
                    {user.displayName ? user.displayName[0].toUpperCase() : "U"}
                  </div>
                )}
                <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>

              {/* Данные пользователя */}
              <h3 className="text-xl font-bold text-gray-900 mb-1 tracking-tight">
                {user.displayName || "Пользователь"}
              </h3>
              <p className="text-sm text-gray-500 mb-6 font-medium text-center break-all">
                {user.email}
              </p>

              {/* Бейдж */}
              <div className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-50/80 rounded-2xl mb-6 border border-gray-100">
                <svg
                  className="w-4 h-4 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  Google Օգտահաշիվ
                </span>
              </div>

              {/* Выход */}
              <button
                type="button"
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-red-50 hover:bg-red-500 text-red-600 hover:text-white font-semibold rounded-2xl transition-all duration-300 shadow-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Դուրս գալ
              </button>
            </>
          ) : (
            /* ================= СТАДИЯ 2: ПОЛЬЗОВАТЕЛЬ НЕ АВТОРИЗОВАН ================= */
            <>
              {/* Пустой аватар */}
              <div className="-mt-12 mb-4 relative">
                <div className="w-24 h-24 rounded-full bg-white text-gray-300 flex items-center justify-center border-[5px] border-white shadow-lg">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                Մուտք գործել
              </h3>
              <p className="text-sm text-gray-500 mb-8 font-medium text-center">
                Մուտք գործեք՝ ձեր հաշիվը կառավարելու համար
              </p>

              {/* Кнопка входа Google */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 py-3.5 px-4 border-2 border-gray-100 hover:border-[#6000ff] hover:bg-gray-50 text-gray-700 font-bold rounded-2xl transition-all duration-300 disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-[#6000ff] border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                )}
                Շարունակել Google-ով
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
