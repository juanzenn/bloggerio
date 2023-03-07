import { useEffect } from "react";
import { create } from "zustand";
import useOutletTypedContext from "./useOutletContext";

import type { User } from "@supabase/supabase-js";

type AuthStoreType = {
  user: User | undefined;
  isLoading: boolean;
  setUser: (user?: User) => void;
};

const useAuth = create<AuthStoreType>((set) => ({
  user: undefined,
  isLoading: true,
  setUser: (user) => set({ user, isLoading: false }),
}));

export function useLoadAuth() {
  const { supabase } = useOutletTypedContext();
  const setUser = useAuth((s) => s.setUser);
  const loading = useAuth((s) => s.isLoading);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.auth.getSession();

      setUser(data.session?.user);
    };

    fetch();
  }, [supabase, setUser]);

  return loading;
}

export default useAuth;
