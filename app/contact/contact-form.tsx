"use client";

import { FormEvent, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjglpjgo";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-medium text-zinc-300">
        Name
        <input
          className="h-12 border border-white/10 bg-black/50 px-4 text-zinc-100 outline-none transition focus:border-[#d9c58f]"
          name="name"
          required
          autoComplete="name"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-zinc-300">
        Email
        <input
          className="h-12 border border-white/10 bg-black/50 px-4 text-zinc-100 outline-none transition focus:border-[#d9c58f]"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-zinc-300">
          Event Date
          <input
            className="h-12 border border-white/10 bg-black/50 px-4 text-zinc-100 outline-none transition focus:border-[#d9c58f]"
            name="event_date"
            type="date"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-zinc-300">
          Event Type
          <select
            className="h-12 border border-white/10 bg-black/50 px-4 text-zinc-100 outline-none transition focus:border-[#d9c58f]"
            name="event_type"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option>Corporate event</option>
            <option>Private event</option>
            <option>Wedding</option>
            <option>Bar or bat mitzvah</option>
            <option>School or teen event</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-zinc-300">
        Message
        <textarea
          className="min-h-36 resize-y border border-white/10 bg-black/50 p-4 text-zinc-100 outline-none transition focus:border-[#d9c58f]"
          name="message"
          required
        />
      </label>

      <button
        className="h-12 bg-[#d9c58f] px-7 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send inquiry"}
      </button>

      <div className="min-h-6" aria-live="polite">
        {status === "success" ? (
          <p className="text-sm text-[#d9c58f]">
            Thank you. Your inquiry has been sent.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-red-300">
            Something went wrong. Please try again or email
            noahyahney@gmail.com.
          </p>
        ) : null}
      </div>
    </form>
  );
}
