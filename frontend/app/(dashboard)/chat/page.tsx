import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ChatPanel } from "./_components/chat-panel";

export default function ChatPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
      <DashboardHeader
        title="Chat"
        description="Talk to your supportive mental coach. Messages are proxied through Next.js to the FastAPI backend."
      />

      <ChatPanel />
    </div>
  );
}
