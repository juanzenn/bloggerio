import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useState } from "react";
import globalStyles from "./global.css";

import type { MetaFunction } from "@remix-run/node";
import { createBrowserClient } from "@supabase/auth-helpers-remix";
import type { Database } from "db_types";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Bloggerio",
  viewport: "width=device-width,initial-scale=1",
});

export const loader = async () => {
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
  };

  return json({ env });
};

export function links() {
  return [
    {
      rel: "stylesheet",
      href: globalStyles,
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&display=swap",
    },
  ];
}

function App() {
  const { env } = useLoaderData<typeof loader>();

  const [supabase] = useState(() =>
    createBrowserClient<Database>(env.SUPABASE_URL, env.SUPABASE_ANON_KEY)
  );

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet context={{ supabase }} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default App;
