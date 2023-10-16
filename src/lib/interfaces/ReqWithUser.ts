import { Request } from 'express';
import { UserWithId } from '../types';

export default interface ReqWithUser<Params = {}, ResponseBody = {}, RequestBody = {}>
  extends Request<Params, ResponseBody, RequestBody> {
  user: UserWithId;
}
