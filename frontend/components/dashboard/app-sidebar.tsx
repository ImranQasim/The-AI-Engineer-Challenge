"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { dashboardNavItems } from "@/lib/dashboard-nav";
import { cn } from "@/lib/utils";

type AppSidebarProps = {
  className?: string;
};

/**
 * Client sidebar: mobile drawer + active route highlighting via usePathname.
 * The dashboard layout stays a Server Component; only this leaf is client-side.
 */
export function AppSidebar({ className }: AppSidebarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = (
    <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Dashboard">
      {dashboardNavItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/dashboard" && pathname.startsWith(item.href));
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
              isActive
                ? "bg-primary text-white shadow-sm"
                : "text-heading hover:bg-white/70",
            )}
          >
            <Icon className="size-5 shrink-0" aria-hidden />
            <span className="flex flex-col">
              <span>{item.label}</span>
              {item.description ? (
                <span
                  className={cn(
                    "text-xs font-normal",
                    isActive ? "text-white/80" : "text-muted",
                  )}
                >
                  {item.description}
                </span>
              ) : null}
            </span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      <button
        type="button"
        className="fixed left-4 top-4 z-40 flex size-10 items-center justify-center rounded-lg bg-white/90 text-heading shadow-md backdrop-blur-md lg:hidden"
        onClick={() => setMobileOpen(true)}
        aria-expanded={mobileOpen}
        aria-controls="dashboard-sidebar"
        aria-label="Open navigation menu"
      >
        <Menu className="size-5" />
      </button>

      {mobileOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden"
          aria-label="Close navigation menu"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}

      <aside
        id="dashboard-sidebar"
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-white/30 bg-white/80 backdrop-blur-md transition-transform duration-200 lg:static lg:z-auto lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          className,
        )}
      >
        <div className="flex items-center justify-between gap-2 border-b border-white/30 p-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-heading"
            onClick={() => setMobileOpen(false)}
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-white">
              <Sparkles className="size-5" aria-hidden />
            </span>
            <span className="font-semibold">AI Coach</span>
          </Link>
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-lg text-muted hover:bg-white/60 lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
          >
            <X className="size-5" />
          </button>
        </div>
        {nav}
        <p className="mt-auto p-4 text-xs text-muted">
          Powered by your FastAPI backend
        </p>
      </aside>
    </>
  );
}
