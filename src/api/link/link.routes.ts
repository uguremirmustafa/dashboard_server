import express from 'express';
import * as LinkController from './link.controller';
import { validateGetAllUnderCategory, validateCreateLinkBody } from './link.validations';
import isAuth from '../auth/isAuth.middleware';

const router = express.Router();

// router.get('/:id', isAuth, validateFoodCategoryParams, IngredientController.getAllUnderCategory);
router.get('/:categoryId', isAuth, validateGetAllUnderCategory, LinkController.getAllUnderCategory);
router.post('/', isAuth, validateCreateLinkBody, LinkController.createOne);
// router.put('/:id', isAuth, validateUpdateIngredient, IngredientController.updateOne);
// router.delete('/:id', isAuth, validateDeleteIngredientParams, IngredientController.deleteOne);

export default router;
