import type { MetaFunction } from "@remix-run/node"; // or cloudflare/deno

export const meta: MetaFunction = () => ({
  title: "Blogger - Home",
});

export default function HomeDashboard() {
  return <div>Home</div>;
}
