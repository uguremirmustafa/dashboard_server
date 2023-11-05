import { validateRequest } from '@/lib/middlewares/middlewares';
import { Category, ID } from '@/lib/schemas/schemas';

export const validateCreateLinkCategoryBody = validateRequest({
  body: Category,
});
export const validateUpdateLinkCategory = validateRequest({
  body: Category,
  params: ID,
});
export const validateDeleteLinkCategory = validateRequest({
  params: ID,
});
