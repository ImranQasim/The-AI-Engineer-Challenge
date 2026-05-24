import { DashboardShell } from "@/components/dashboard/dashboard-shell";

/**
 * Route group layout: shared dashboard chrome for /dashboard, /chat, /settings.
 * The (dashboard) segment does not appear in the URL.
 */
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardShell>{children}</DashboardShell>;
}
