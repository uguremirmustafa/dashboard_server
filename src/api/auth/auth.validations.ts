import { validateRequest } from '@/lib/middlewares/middlewares';
import { User } from '@/lib/schemas/schemas';

export const validateRegisterBody = validateRequest({
  body: User,
});
