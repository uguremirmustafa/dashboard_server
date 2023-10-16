import { NextFunction, Request, Response } from 'express';
// import {
//   createIngredient,
//   deleteIngredient,
//   getIngredientsUnderCategory,
//   updateIngredient,
//   getIngredientsSearch,
// } from './link_category.service';
import { BoolResponse } from '@/lib/interfaces/BoolResponse';
import {
  BaseIngredient,
  CategoryId,
  ID,
  Ingredient,
  IngredientParams,
  LinkItem,
  LinkItemWithCategoryIdList,
  Search,
  UserWithId,
} from '@/lib/types';
import { createLink, getLinksUnderCategory } from './link.service';
import { Link } from '@prisma/client';

// export async function getAll(req: Request, res: Response, next: NextFunction) {
//   try {
//     const items = await getLinksUnderCategory();
//     res.json(items);
//   } catch (error) {
//     next(error);
//   }
// }

export async function getAllUnderCategory(req: Request, res: Response<any[]>, next: NextFunction) {
  try {
    const params = req.params as unknown as CategoryId;
    const items = await getLinksUnderCategory(params.categoryId);
    res.json(items);
  } catch (error) {
    next(error);
  }
}

export async function createOne(req: Request, res: Response<Link>, next: NextFunction) {
  try {
    const body = req.body as LinkItemWithCategoryIdList;
    const user = req.user as unknown as UserWithId;
    const newItem = await createLink(body, user.id);
    res.json(newItem);
  } catch (error) {
    next(error);
  }
}

// export async function updateOne(req: Request, res: Response<Ingredient>, next: NextFunction) {
//   try {
//     const params = req.params as unknown as IngredientParams;
//     const body = req.body as Ingredient;
//     const updatedIngredient = await updateIngredient(body, params.id);
//     res.json(updatedIngredient);
//   } catch (error) {
//     next(error);
//   }
// }

// export async function deleteOne(req: Request, res: Response<BoolResponse>, next: NextFunction) {
//   try {
//     const params = req.params as unknown as IngredientParams;
//     const isDeleted = await deleteIngredient(params.id);
//     res.json({ success: isDeleted });
//   } catch (error) {
//     next(error);
//   }
// }
