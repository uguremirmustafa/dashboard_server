import express from 'express';
import * as IngredientController from './link_category.controller';
import {
  validateCreateIngredientBody,
  validateDeleteIngredientParams,
  validateSearchIngredientQuery,
  validateUpdateIngredient,
} from './link_category.validations';
import isAuth from '../auth/isAuth.middleware';

const router = express.Router();

// router.get('/:id', isAuth, validateFoodCategoryParams, IngredientController.getAllUnderCategory);
router.get('/', isAuth, IngredientController.getAll);
// router.post('/', isAuth, validateCreateIngredientBody, IngredientController.createOne);
// router.put('/:id', isAuth, validateUpdateIngredient, IngredientController.updateOne);
// router.delete('/:id', isAuth, validateDeleteIngredientParams, IngredientController.deleteOne);

export default router;
