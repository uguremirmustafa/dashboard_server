import session from 'express-session';
import { appConfig } from './appConfig';
import RedisStore from 'connect-redis';
import { createClient } from 'redis';

import mockRedis from 'redis-mock';

export const redisClient = createClient({
  url: appConfig.REDIS_URL,
});

const redisStore = new RedisStore({
  client: appConfig.NODE_ENV === 'test' ? mockRedis.createClient() : redisClient,
});

const sessionConfig = session({
  secret: appConfig.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: redisStore,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24, // 24 hours
  },
});

export default sessionConfig;
