import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoriteStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (loan) => {
        const currentFavorites = get().favorites;
        const isFav = currentFavorites.some((fav) => fav.id === loan.id);
        if (isFav) {
          set({
            favorites: currentFavorites.filter((fav) => fav.id !== loan.id),
          });
        } else {
          set({ favorites: [...currentFavorites, loan] });
        }
      },
      isFavorite: (loanId) => {
        return get().favorites.some((fav) => fav.id === loanId);
      },
    }),
    {
      name: "favorite-loans-storage", 
    }
  )
);