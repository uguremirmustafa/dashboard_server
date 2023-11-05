import express from 'express';
import * as LinkCategoryController from './link_category.controller';
import {
  validateCreateLinkCategoryBody,
  validateDeleteLinkCategory,
  validateUpdateLinkCategory,
} from './link_category.validations';
import isAuth from '../auth/isAuth.middleware';

const router = express.Router();

router.get('/', isAuth, LinkCategoryController.getAll);
router.post('/', isAuth, validateCreateLinkCategoryBody, LinkCategoryController.createOne);
router.put('/:id', isAuth, validateUpdateLinkCategory, LinkCategoryController.updateOne);
router.delete('/:id', isAuth, validateDeleteLinkCategory, LinkCategoryController.deleteOne);

export default router;
