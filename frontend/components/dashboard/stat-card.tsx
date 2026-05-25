import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type StatCardProps = {
  label: string;
  value: string;
  hint?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
};

const trendStyles = {
  up: "text-accent",
  down: "text-red-600",
  neutral: "text-muted",
};

/** Metric tile for the dashboard overview grid. */
export function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  trend = "neutral",
}: StatCardProps) {
  return (
    <Card className="flex h-full flex-col p-4 sm:p-6">
      <CardHeader className="flex-row items-start justify-between space-y-0">
        <div>
          <CardDescription>{label}</CardDescription>
          <CardTitle className="mt-2 text-3xl font-bold tabular-nums">
            {value}
          </CardTitle>
        </div>
        <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-5" aria-hidden />
        </span>
      </CardHeader>
      {hint ? (
        <CardContent className="mt-auto pt-2">
          <p className={cn("text-sm", trendStyles[trend])}>{hint}</p>
        </CardContent>
      ) : null}
    </Card>
  );
}
