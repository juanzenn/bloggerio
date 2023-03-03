import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import supabaseServer from "utils/supabase.server";

export const action = async ({ request }: ActionArgs) => {
  const response = new Response();
  await supabaseServer({
    request: request,
    response,
  }).auth.signOut();

  return redirect("/login", {
    headers: response.headers,
  });
};

export const loader = async () => {
  return redirect("/");
};
