import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isAuthModalOpen: false,
  setUser: (user) => set({ user }), // <-- убедитесь, что это есть
  openAuthModal: () => set({ isAuthModalOpen: true }),
  closeAuthModal: () => set({ isAuthModalOpen: false }),
}));
