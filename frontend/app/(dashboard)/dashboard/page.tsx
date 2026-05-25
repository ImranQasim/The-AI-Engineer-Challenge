import { Activity, MessageCircle, Zap } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
      <DashboardHeader
        title="Overview"
        description="Your AI mental coach at a glance. Start a session or review quick stats."
        actions={
          <ButtonLink href="/chat" variant="primary">
            New chat
          </ButtonLink>
        }
      />

      <section
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Dashboard metrics"
      >
        <StatCard
          label="Sessions today"
          value="3"
          hint="+1 from yesterday"
          icon={MessageCircle}
          trend="up"
        />
        <StatCard
          label="Avg. response"
          value="1.2s"
          hint="Backend healthy"
          icon={Zap}
          trend="neutral"
        />
        <StatCard
          label="Streak"
          value="5 days"
          hint="Keep it going"
          icon={Activity}
          trend="up"
        />
      </section>

      <section className="grid gap-4 lg:grid-cols-2" aria-label="Quick actions">
        <Card className="p-6 sm:p-8">
          <CardHeader>
            <CardTitle>Start coaching</CardTitle>
            <CardDescription>
              Open the chat view to send a message to your FastAPI-backed coach.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ButtonLink href="/chat" variant="secondary">
              Go to chat
            </ButtonLink>
          </CardContent>
        </Card>

        <Card className="p-6 sm:p-8">
          <CardHeader>
            <CardTitle>Local development</CardTitle>
            <CardDescription>
              Run the Python API on port 8000, then point the frontend proxy at
              it when you wire up chat.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <code className="block rounded-lg bg-slate-100 px-3 py-2 text-sm text-heading">
              uv run uvicorn api.index:app --reload
            </code>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
