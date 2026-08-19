import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isAuthModalOpen: false,
  setUser: (user) => set({ user }), 
  openAuthModal: () => set({ isAuthModalOpen: true }),
  closeAuthModal: () => set({ isAuthModalOpen: false }),
}));
