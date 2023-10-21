import express from 'express';
import * as LinkCategoryController from './link_category.controller';
import { validateCreateLinkCategoryBody } from './link_category.validations';
import isAuth from '../auth/isAuth.middleware';

const router = express.Router();

// router.get('/:id', isAuth, validateFoodCategoryParams, IngredientController.getAllUnderCategory);
router.get('/', isAuth, LinkCategoryController.getAll);
router.post('/', isAuth, validateCreateLinkCategoryBody, LinkCategoryController.createOne);
// router.put('/:id', isAuth, validateUpdateIngredient, IngredientController.updateOne);
// router.delete('/:id', isAuth, validateDeleteIngredientParams, IngredientController.deleteOne);

export default router;
