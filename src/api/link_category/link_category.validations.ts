import { validateRequest } from '@/lib/middlewares/middlewares';
import { Category } from '@/lib/schemas/schemas';

export const validateCreateLinkCategoryBody = validateRequest({
  body: Category,
});
