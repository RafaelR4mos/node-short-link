import { createClient } from "redis";

export const redis = createClient({
  url: `redis://default:${process.env.REDIS_PASSWORD}@us1-civil-viper-38429.upstash.io:38429`,
});

redis.connect();
