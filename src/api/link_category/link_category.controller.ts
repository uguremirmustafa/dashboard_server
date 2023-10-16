import { NextFunction, Request, Response } from 'express';
// import {
//   createIngredient,
//   deleteIngredient,
//   getIngredientsUnderCategory,
//   updateIngredient,
//   getIngredientsSearch,
// } from './link_category.service';
import { BoolResponse } from '@/lib/interfaces/BoolResponse';
import { BaseIngredient, ID, Ingredient, IngredientParams, Search } from '@/lib/types';
import { getAllCategories } from './link_category.service';

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const items = await getAllCategories();
    res.json(items);
  } catch (error) {
    next(error);
  }
}

// export async function getAllUnderCategory(
//   req: Request,
//   res: Response<Ingredient[]>,
//   next: NextFunction
// ) {
//   try {
//     const params = req.params as unknown as ID;
//     const ingredients = await getIngredientsUnderCategory(params.id);
//     res.json(ingredients);
//   } catch (error) {
//     next(error);
//   }
// }

// export async function createOne(req: Request, res: Response<Ingredient>, next: NextFunction) {
//   try {
//     const body = req.body as Ingredient;
//     const newIngredient = await createIngredient(body);
//     res.json(newIngredient);
//   } catch (error) {
//     next(error);
//   }
// }

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
