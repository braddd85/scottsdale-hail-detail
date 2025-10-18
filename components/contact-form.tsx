"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  async function onSubmit(formData: FormData) {
    setStatus("loading");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      }),
    });
    setStatus(res.ok ? "sent" : "error");
  }
  return (
    <form action={onSubmit} className="grid gap-3">
      <input name="name" placeholder="Name" className="h-11 rounded-md border border-border bg-background px-3" required />
      <input name="email" type="email" placeholder="Email" className="h-11 rounded-md border border-border bg-background px-3" required />
      <input name="phone" placeholder="Phone" className="h-11 rounded-md border border-border bg-background px-3" />
      <textarea name="message" placeholder="Message" rows={5} className="rounded-md border border-border bg-background p-3" required />
      <button disabled={status === "loading"} className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-primary-foreground font-medium">
        {status === "loading" ? "Sending..." : "Send"}
      </button>
      {status === "sent" && <p className="text-sm text-accent">Thanks! We’ll be in touch shortly.</p>}
      {status === "error" && <p className="text-sm text-destructive">Something went wrong. Please try again.</p>}
    </form>
  );
}

