import postgres from "postgres";
import "dotenv/config";

console.log(process.env.POSTGRES_PASSWORD);

export const sql = postgres(
  `postgresql://shortLink_owner:${process.env.POSTGRES_PASSWORD}@ep-long-dew-a54esyj3.us-east-2.aws.neon.tech/shortLink?sslmode=require`
);
