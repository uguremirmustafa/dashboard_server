import { validateRequest } from '@/lib/middlewares/middlewares';
import { ID, Search, CategoryId, LinkItemWithCategoryIdList } from '@/lib/schemas/schemas';

export const validateCreateLinkBody = validateRequest({
  body: LinkItemWithCategoryIdList,
});
export const validateGetAllUnderCategory = validateRequest({
  params: CategoryId,
});
export const validateDeleteIngredientParams = validateRequest({
  params: ID,
});
export const validateSearchIngredientQuery = validateRequest({
  query: Search,
});
