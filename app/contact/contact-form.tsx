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
    <form className="booking-form" onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="_subject"
        value="New NoahYahney.com booking inquiry"
      />

      <div className="form-grid form-grid-two">
        <label>
          <span>Name <strong aria-hidden="true">*</strong></span>
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          <span>Email <strong aria-hidden="true">*</strong></span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </label>
      </div>

      <div className="form-grid form-grid-two">
        <label>
          <span>Event date</span>
          <input name="event_date" type="date" />
        </label>
        <label>
          <span>Event location <strong aria-hidden="true">*</strong></span>
          <input
            name="event_location"
            required
            autoComplete="address-level2"
            placeholder="City, state, or venue"
          />
        </label>
      </div>

      <div className="form-grid form-grid-two">
        <label>
          <span>Event type <strong aria-hidden="true">*</strong></span>
          <select name="event_type" required defaultValue="">
            <option value="" disabled>
              Select an event
            </option>
            <option>Corporate event</option>
            <option>Private event</option>
            <option>Wedding</option>
            <option>Bar or Bat Mitzvah</option>
            <option>School or teen event</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          <span>Estimated guest count</span>
          <input
            name="estimated_guest_count"
            type="number"
            min="1"
            inputMode="numeric"
            placeholder="Approximate is fine"
          />
        </label>
      </div>

      <label>
        <span>Tell Noah about the event <strong aria-hidden="true">*</strong></span>
        <textarea
          name="message"
          required
          placeholder="What are you planning, and what would make the event feel successful?"
        />
      </label>

      <div className="form-submit-row">
        <button
          className="button button-primary"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending inquiry..." : "Send inquiry"}
          <span aria-hidden="true">&#8594;</span>
        </button>
        <p>Your details are sent directly to Noah.</p>
      </div>

      <div className="form-status" aria-live="polite">
        {status === "success" ? (
          <p className="form-success" role="status">
            Thank you. Your inquiry has been sent, and Noah will follow up
            directly.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="form-error" role="alert">
            Something went wrong. Please try again or email
            noahyahney@gmail.com.
          </p>
        ) : null}
      </div>
    </form>
  );
}
