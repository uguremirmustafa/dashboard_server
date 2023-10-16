import app from './app';
import { appConfig } from '@/config/appConfig';
import { redisClient } from './config/sessionConfig';

app.listen(appConfig.PORT, () => {
  console.log(`listening on ${appConfig.PORT}`);
  redisClient.connect().catch(console.error);
});
