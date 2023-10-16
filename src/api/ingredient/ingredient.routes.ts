import express from 'express';
import * as IngredientController from './ingredient.controller';
import {
  validateCreateIngredientBody,
  validateDeleteIngredientParams,
  validateSearchIngredientQuery,
  validateUpdateIngredient,
} from './ingredient.validations';
import { validateFoodCategoryParams } from '../food_category/food_category.validations';
import isAuth from '../auth/isAuth.middleware';

const router = express.Router();

router.get('/:id', isAuth, validateFoodCategoryParams, IngredientController.getAllUnderCategory);
router.get('/', isAuth, validateSearchIngredientQuery, IngredientController.getSearch);
router.post('/', isAuth, validateCreateIngredientBody, IngredientController.createOne);
router.put('/:id', isAuth, validateUpdateIngredient, IngredientController.updateOne);
router.delete('/:id', isAuth, validateDeleteIngredientParams, IngredientController.deleteOne);

export default router;
