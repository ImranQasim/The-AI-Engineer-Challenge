import type { LucideIcon } from "lucide-react";
import { LayoutDashboard, MessageSquare, Settings } from "lucide-react";

export type DashboardNavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  description?: string;
};

/** Shared navigation config for the dashboard shell. */
export const dashboardNavItems: DashboardNavItem[] = [
  {
    href: "/dashboard",
    label: "Overview",
    icon: LayoutDashboard,
    description: "Stats and quick actions",
  },
  {
    href: "/chat",
    label: "Chat",
    icon: MessageSquare,
    description: "Talk to your mental coach",
  },
  {
    href: "/settings",
    label: "Settings",
    icon: Settings,
    description: "Preferences and API setup",
  },
];
