import { NextFunction, Request, Response } from 'express';
// import {
//   createIngredient,
//   deleteIngredient,
//   getIngredientsUnderCategory,
//   updateIngredient,
//   getIngredientsSearch,
// } from './link_category.service';
import { Category, CategoryWithId } from '@/lib/types';
import { createCategory, getAllCategories } from './link_category.service';

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const items = await getAllCategories();
    res.json(items);
  } catch (error) {
    next(error);
  }
}

export async function createOne(req: Request, res: Response<CategoryWithId>, next: NextFunction) {
  try {
    const body = req.body as Category;
    const item = await createCategory(body);
    res.json(item);
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
