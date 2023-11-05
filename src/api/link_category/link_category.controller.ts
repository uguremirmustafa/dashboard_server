import { NextFunction, Request, Response } from 'express';
import { Category, CategoryWithId, ID, UserWithId } from '@/lib/types';
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
} from './link_category.service';

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
    const user = req.user as unknown as UserWithId;
    const body = req.body as Category;
    const item = await createCategory(body, user.id);
    res.json(item);
  } catch (error) {
    next(error);
  }
}

export async function updateOne(req: Request, res: Response<CategoryWithId>, next: NextFunction) {
  try {
    const params = req.params as unknown as ID;
    const body = req.body as Category;
    const updatedIngredient = await updateCategory(body, params.id);
    res.json(updatedIngredient);
  } catch (error) {
    next(error);
  }
}

export async function deleteOne(req: Request, res: Response<number>, next: NextFunction) {
  try {
    const params = req.params as unknown as ID;
    const id = await deleteCategory(params.id);
    res.json(id);
  } catch (error) {
    next(error);
  }
}
