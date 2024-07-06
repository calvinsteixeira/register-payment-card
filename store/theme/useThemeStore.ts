import { create } from "zustand";

interface UseThemeStore {
  currentTheme: "light" | "dark";
  toggleTheme: () => void;
}

const useThemeStore = create<UseThemeStore>((set) => ({
  currentTheme: "dark",
  toggleTheme: () => {
    return set((state: UseThemeStore) => {
      const newTheme: UseThemeStore["currentTheme"] =
        state.currentTheme == "light" ? "dark" : "light";
      document.documentElement.classList.replace(state.currentTheme, newTheme);
      return { currentTheme: newTheme };
    });
  },
}));

export { useThemeStore };
