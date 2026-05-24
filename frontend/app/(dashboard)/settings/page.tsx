import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Settings placeholder — use type="password" for any API key fields per project rules.
 */
export default function SettingsPage() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-8">
      <DashboardHeader
        title="Settings"
        description="Configure how the frontend reaches your backend."
      />

      <Card className="p-6 sm:p-8">
        <CardHeader>
          <CardTitle>API base URL</CardTitle>
          <CardDescription>
            Set <code className="text-sm">NEXT_PUBLIC_API_URL</code> when deploying.
            For local dev, defaults to http://localhost:8000.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <label className="flex flex-col gap-2 text-sm font-medium text-heading">
            Backend URL (example)
            <input
              type="url"
              name="apiUrl"
              defaultValue="http://localhost:8000"
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-heading shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              readOnly
              aria-readonly="true"
            />
          </label>
        </CardContent>
      </Card>
    </div>
  );
}
