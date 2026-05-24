import type { ReactNode } from "react";
import { AppSidebar } from "@/components/dashboard/app-sidebar";

type DashboardShellProps = {
  children: ReactNode;
};

/**
 * Dashboard chrome: sidebar + scrollable main region.
 * Composed in app/(dashboard)/layout.tsx so all dashboard routes share the shell.
 */
export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <main className="flex-1 overflow-y-auto p-4 sm:p-8">{children}</main>
      </div>
    </div>
  );
}
