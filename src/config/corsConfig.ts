import { appConfig } from './appConfig';

const configs = {
  development: {
    origin: 'http://localhost:4001',
    credentials: true,
    exposedHeaders: ['set-cookie'],
  },
  test: {
    origin: 'http://localhost:5173',
    credentials: true,
    exposedHeaders: ['set-cookie'],
  },
  production: {
    origin: 'http://localhost:5173',
    credentials: true,
    exposedHeaders: ['set-cookie'],
  },
};

const corsConfig = configs[appConfig.NODE_ENV];
export default corsConfig;
