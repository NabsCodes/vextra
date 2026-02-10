import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { getRequiredEnv } from "@/lib/server-env";
import * as schema from "@/db/schema";

const sql = neon(getRequiredEnv("DATABASE_URL"));

export const db = drizzle(sql, { schema });
