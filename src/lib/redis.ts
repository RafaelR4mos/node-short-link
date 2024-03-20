import { createClient } from "redis";

export const redis = createClient({
  url: `${process.env.METRICS_URL}`,
});

redis.connect();
