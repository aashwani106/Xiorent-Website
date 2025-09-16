import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  DATABASE_URL: z.string().min(1),
  NEXTAUTH_SECRET: z.string().min(1),
  NEXTAUTH_URL: z.string().url(),
  JWT_SECRET: z.string().min(1),
  API_BASE_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);

export type Env = z.infer<typeof envSchema>;
