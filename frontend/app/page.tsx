import { redirect } from "next/navigation";

/** Send visitors to the dashboard overview. */
export default function Home() {
  redirect("/dashboard");
}
