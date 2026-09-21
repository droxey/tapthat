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

export type Order = {
  id: string;
  at: string;
  total: number;
  email: string;
  name: string;
  address: string;
};

export function createOrder(
  total: number,
  contact: { email: string; name: string; address: string },
): Order {
  const id = `TT-${Date.now().toString(36).toUpperCase()}`;
  return {
    id,
    at: new Date().toISOString(),
    total,
    email: contact.email,
    name: contact.name,
    address: contact.address,
  };
}

type AppLocal = {
  profile: Profile;
  follows: string[];
  memories: LocalMemory[];
  newsletter: string[];
  orders: Order[];
  setProfile: (p: Partial<Profile>) => void;
  follow: (id: string) => void;
  addMemory: (m: Omit<LocalMemory, "id" | "at">) => LocalMemory;
  subscribe: (email: string) => void;
  placeOrder: (input: { total: number; email: string; name: string; address: string }) => string;
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
      placeOrder: (input) => {
        const row = createOrder(input.total, input);
        set({ orders: [row, ...get().orders] });
        return row.id;
      },
    }),
    { name: "tapthat-local" },
  ),
);
