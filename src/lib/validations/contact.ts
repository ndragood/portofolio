import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter at least 2 characters")
    .max(80, "Keep it under 80 characters"),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
  message: z
    .string()
    .trim()
    .min(10, "Tell me a bit more — at least 10 characters")
    .max(2000, "Keep it under 2000 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
