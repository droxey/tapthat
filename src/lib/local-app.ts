import { create } from "zustand";
import { persist } from "zustand/middleware";

export type LocalMemory = {
  id: string;
  charmId: string;
  note: string;
  place: string;
  at: string;
};

export type Profile = {
  name: string;
  handle: string;
  instagram: string;
  note: string;
};

type AppLocal = {
  profile: Profile;
  follows: string[];
  memories: LocalMemory[];
  newsletter: string[];
  orders: { id: string; at: string; total: number }[];
  setProfile: (p: Partial<Profile>) => void;
  follow: (id: string) => void;
  addMemory: (m: Omit<LocalMemory, "id" | "at">) => LocalMemory;
  subscribe: (email: string) => void;
  placeOrder: (total: number) => string;
};

export const useLocalApp = create<AppLocal>()(
  persist(
    (set, get) => ({
      profile: { name: "", handle: "", instagram: "", note: "" },
      follows: [],
      memories: [],
      newsletter: [],
      orders: [],
      setProfile: (p) => set({ profile: { ...get().profile, ...p } }),
      follow: (id) => {
        const has = get().follows.includes(id);
        set({
          follows: has ? get().follows.filter((x) => x !== id) : [...get().follows, id],
        });
      },
      addMemory: (m) => {
        const row: LocalMemory = {
          ...m,
          id: `local-${Date.now()}`,
          at: new Date().toISOString(),
        };
        set({ memories: [row, ...get().memories] });
        return row;
      },
      subscribe: (email) => {
        if (!get().newsletter.includes(email)) {
          set({ newsletter: [...get().newsletter, email] });
        }
      },
      placeOrder: (total) => {
        const id = `TT-${Date.now().toString(36).toUpperCase()}`;
        set({ orders: [{ id, at: new Date().toISOString(), total }, ...get().orders] });
        return id;
      },
    }),
    { name: "tapthat-local" },
  ),
);
