import type { ReactNode } from "react";

type DashboardHeaderProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
};

/** Page-level header inside the dashboard main area (Server Component). */
export function DashboardHeader({
  title,
  description,
  actions,
}: DashboardHeaderProps) {
  return (
    <header className="flex flex-col gap-4 border-b border-white/30 pb-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0 pl-12 lg:pl-0">
        <h1 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-1 text-sm text-muted sm:text-base">{description}</p>
        ) : null}
      </div>
      {actions ? (
        <div className="flex shrink-0 flex-wrap items-center gap-2 pl-12 lg:pl-0">
          {actions}
        </div>
      ) : null}
    </header>
  );
}
