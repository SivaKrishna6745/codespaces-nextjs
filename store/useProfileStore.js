import { create } from "zustand";

const useProfile = create((set) => ({
  isLoading: false,
  error: "",
  profile: null,
  repos: [],
  fetchGithubData: async (usuername) => {
    if (!usuername.trim()) return;

    set({ isLoading: true, error: "" });

    try {
      const response = await fetch(
        `/api/github?search=${encodeURIComponent(usuername)}`,
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to parse profile data");
      }

      set({
        profile: data.profile,
        repos: data.repos,
        isLoading: false,
        error: "",
      });
    } catch (err) {
      set({
        error: err.message,
        isLoading: false,
        profile: null,
        repos: [],
      });
    }
  },

  resetStore: () =>
    set({ profile: null, repos: [], error: "", isLoading: false }),
}));

export default useProfile;
