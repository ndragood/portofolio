"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitState("success");
      reset();
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5 rounded-lg border border-line bg-surface p-6 sm:p-8"
    >
      <div>
        <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wide text-ink-muted">
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
          className="mt-2 w-full rounded-md border border-line bg-void px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-primary focus:outline-none"
          placeholder="Your name"
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-critical">
            <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wide text-ink-muted">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
          className="mt-2 w-full rounded-md border border-line bg-void px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-primary focus:outline-none"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-critical">
            <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wide text-ink-muted">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
          className="mt-2 w-full resize-none rounded-md border border-line bg-void px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-primary focus:outline-none"
          placeholder="What are you reaching out about?"
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-critical">
            <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitState === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm font-medium uppercase tracking-wide text-void transition-opacity disabled:opacity-60 sm:w-auto"
      >
        {submitState === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>

      <div role="status" aria-live="polite">
        {submitState === "success" && (
          <p className="flex items-center gap-2 text-sm text-primary">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            Message sent. I&apos;ll get back to you soon.
          </p>
        )}
        {submitState === "error" && (
          <p className="flex items-center gap-2 text-sm text-critical">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            Something went wrong — please try again or email me directly.
          </p>
        )}
      </div>
    </form>
  );
}
