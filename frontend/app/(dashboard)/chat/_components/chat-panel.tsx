"use client";

import { useMemo, useRef, useState } from "react";
import { SendHorizonal, Sparkles, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ChatRequest, ChatResponse } from "@/types/chat";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi — I’m here to support you. What’s on your mind today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const canSend = input.trim().length > 0 && !isSending;

  const placeholder = useMemo(() => {
    return isSending ? "Thinking…" : "Type your message…";
  }, [isSending]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || isSending) return;

    setError(null);
    setIsSending(true);
    setInput("");

    const userMessage: Message = { id: makeId(), role: "user", content: text };
    const pendingAssistant: Message = {
      id: makeId(),
      role: "assistant",
      content: "…",
    };

    setMessages((prev) => [...prev, userMessage, pendingAssistant]);

    queueMicrotask(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
    });

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message: text } satisfies ChatRequest),
      });

      const json = (await res.json().catch(() => null)) as
        | (ChatResponse & { error?: never })
        | { error?: string }
        | null;

      if (!res.ok) {
        const msg =
          (json && typeof json.error === "string" && json.error) ||
          `Request failed (${res.status})`;
        throw new Error(msg);
      }

      const reply = json && "reply" in json ? json.reply : null;
      if (!reply || typeof reply !== "string") {
        throw new Error("Malformed API response");
      }

      setMessages((prev) =>
        prev.map((m) =>
          m.id === pendingAssistant.id ? { ...m, content: reply } : m,
        ),
      );
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to send message";
      setError(msg);
      setMessages((prev) =>
        prev.filter((m) => m.id !== pendingAssistant.id),
      );
    } finally {
      setIsSending(false);
      queueMicrotask(() => {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
      });
    }
  }

  return (
    <Card className="p-4 sm:p-6">
      <CardHeader className="flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-white">
            <Sparkles className="size-5" aria-hidden />
          </span>
          <CardTitle>Coach chat</CardTitle>
        </div>
        <p className="text-xs text-muted">POST → /api/chat</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {error ? (
          <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
            <div className="min-w-0">
              <p className="font-medium">Couldn’t send message</p>
              <p className="break-words">{error}</p>
            </div>
          </div>
        ) : null}

        <div
          ref={listRef}
          className="max-h-[52vh] space-y-3 overflow-y-auto rounded-xl bg-slate-50 p-3 sm:p-4"
          aria-label="Messages"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={cn(
                "flex w-full",
                m.role === "user" ? "justify-end" : "justify-start",
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm",
                  m.role === "user"
                    ? "bg-primary text-white"
                    : "bg-white text-heading",
                )}
              >
                <p className="whitespace-pre-wrap break-words">{m.content}</p>
              </div>
            </div>
          ))}
        </div>

        <form
          className="flex items-end gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            void sendMessage();
          }}
        >
          <label className="flex-1 text-sm font-medium text-heading">
            <span className="sr-only">Message</span>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={placeholder}
              rows={2}
              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-heading shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 disabled:opacity-60"
              disabled={isSending}
            />
          </label>

          <Button
            type="submit"
            variant="primary"
            disabled={!canSend}
            className="h-11 px-4"
            aria-label="Send message"
          >
            <SendHorizonal className="size-4" aria-hidden />
            <span className="hidden sm:inline">Send</span>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

