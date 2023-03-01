import { useOutletContext } from "@remix-run/react";

import type { SupabaseClient } from "@supabase/supabase-js";

type TypedSupabaseClient = SupabaseClient;

export type OutletContext = {
  supabase: TypedSupabaseClient;
};

export default function useOutletTypedContext() {
  return useOutletContext<OutletContext>();
}
