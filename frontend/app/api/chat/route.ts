import { NextResponse } from "next/server";
import type { ChatRequest, ChatResponse } from "@/types/chat";

function getBackendBaseUrl() {
  // Server-side only: prefer a server env var, fall back to public env var,
  // and finally local dev default.
  return (
    process.env.API_BASE_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:8000"
  );
}

export async function POST(request: Request) {
  let body: ChatRequest | null = null;

  try {
    body = (await request.json()) as ChatRequest;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const message = body?.message?.trim();
  if (!message) {
    return NextResponse.json(
      { error: "Message is required" },
      { status: 400 },
    );
  }

  const backendBaseUrl = getBackendBaseUrl().replace(/\/+$/, "");
  const url = `${backendBaseUrl}/api/chat`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ message }),
      // This endpoint is dynamic; don't cache across users/messages.
      cache: "no-store",
    });

    if (!res.ok) {
      const maybeJson = await res.json().catch(() => null);
      const detail =
        (maybeJson && typeof maybeJson.detail === "string" && maybeJson.detail) ||
        (maybeJson && typeof maybeJson.error === "string" && maybeJson.error) ||
        `Backend error (${res.status})`;

      return NextResponse.json({ error: detail }, { status: res.status });
    }

    const data = (await res.json()) as ChatResponse;
    if (!data?.reply || typeof data.reply !== "string") {
      return NextResponse.json(
        { error: "Malformed backend response" },
        { status: 502 },
      );
    }

    return NextResponse.json({ reply: data.reply } satisfies ChatResponse);
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to reach backend";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

