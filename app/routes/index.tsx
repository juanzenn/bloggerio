import { redirect } from "@remix-run/node";
import supabaseServer from "utils/supabase.server";

import type { LoaderArgs } from "@remix-run/node";

export const loader = async ({ request }: LoaderArgs) => {
  const response = new Response();
  const { data } = await supabaseServer({
    request: request,
    response,
  }).auth.getSession();

  if (data.session) {
    return redirect("/dashboard");
  } else {
    return redirect("/login");
  }
};
