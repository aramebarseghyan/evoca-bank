import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoriteStore = create(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (loan) => {
        const currentFavorites = get().favorites;
        // Переводим ID в строку для надежности
        const loanId = String(loan.id);
        const isFav = currentFavorites.some((fav) => String(fav.id) === loanId);

        if (isFav) {
          set({
            favorites: currentFavorites.filter(
              (fav) => String(fav.id) !== loanId,
            ),
          });
        } else {
          set({ favorites: [...currentFavorites, loan] });
        }
      },

      isFavorite: (loanId) => {
        const id = String(loanId);
        return get().favorites.some((fav) => String(fav.id) === id);
      },
    }),
    {
      name: "favorite-loans-storage",
    },
  ),
);
