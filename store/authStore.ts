import { create } from "zustand";
import { persist } from "zustand/middleware";
import Cookies from "js-cookie";
const authStore = (set: any) => ({
  userProfile: null,
  login: (user: any) => {
    set({ userProfile: user });
  },
  logout: () => {
    set({ userProfile: null });
    localStorage.clear();
    const cookieNames = Object.keys(Cookies.get());

    // Loop through the array and remove each cookie
    cookieNames.forEach((cookieName) => {
      Cookies.remove(cookieName);
    });
  },
});

const useAuthStore = create(persist(authStore, { name: "auth" }));

export default useAuthStore;
