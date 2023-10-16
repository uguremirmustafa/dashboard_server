import ReqWithUser from '@/lib/interfaces/ReqWithUser';
import { NextFunction, Request, Response } from 'express';
import { registerUser } from './auth.service';
import { User } from '@/lib/types';

export async function loginHandler(_req: Request, res: Response<User>, next: NextFunction) {
  try {
    const req = _req as unknown as ReqWithUser;
    res.json(req.user);
  } catch (error) {
    next(error);
  }
}

export async function registerHandler(
  req: Request<{}, User, User>,
  res: Response<User>,
  next: NextFunction
) {
  try {
    const userBody = req.body;
    const registeredUser = await registerUser(userBody);
    res.json(registeredUser);
  } catch (error) {
    next(error);
  }
}
