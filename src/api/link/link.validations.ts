import { validateRequest } from '@/lib/middlewares/middlewares';
import { ID, Search, CategoryId, LinkItemWithCategoryIdList } from '@/lib/schemas/schemas';

export const validateCreateLinkBody = validateRequest({
  body: LinkItemWithCategoryIdList,
});
export const validateUpdateLink = validateRequest({
  body: LinkItemWithCategoryIdList,
  params: ID,
});
export const validateGetAllUnderCategory = validateRequest({
  params: CategoryId,
});
export const validateDeleteParams = validateRequest({
  params: ID,
});
export const validateSearchIngredientQuery = validateRequest({
  query: Search,
});
