import { validateRequest } from '@/lib/middlewares/middlewares';
import { Ingredient, ID, Search } from '@/lib/schemas/schemas';

export const validateCreateIngredientBody = validateRequest({
  body: Ingredient,
});
export const validateUpdateIngredient = validateRequest({
  body: Ingredient,
  params: ID,
});
export const validateDeleteIngredientParams = validateRequest({
  params: ID,
});
export const validateSearchIngredientQuery = validateRequest({
  query: Search,
});
