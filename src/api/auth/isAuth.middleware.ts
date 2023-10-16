import { User } from '@/lib/types';
import { Request, Response, NextFunction } from 'express';

const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user as User;
  if (user) {
    return next();
  }

  res.status(401).json({ message: 'Unauthorized' });
};

export default isAuth;
