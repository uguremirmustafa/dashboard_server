import express from 'express';
import * as LinkController from './link.controller';
import {
  validateGetAllUnderCategory,
  validateCreateLinkBody,
  validateUpdateLink,
  validateDeleteParams,
} from './link.validations';
import isAuth from '../auth/isAuth.middleware';

const router = express.Router();

router.get('/:categoryId', isAuth, validateGetAllUnderCategory, LinkController.getAllUnderCategory);
router.post('/', isAuth, validateCreateLinkBody, LinkController.createOne);
router.put('/:id', isAuth, validateUpdateLink, LinkController.updateOne);
router.delete('/:id', isAuth, validateDeleteParams, LinkController.deleteOne);

export default router;
