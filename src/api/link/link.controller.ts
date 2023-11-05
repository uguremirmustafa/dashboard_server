import { NextFunction, Request, Response } from 'express';
import { BoolResponse } from '@/lib/interfaces/BoolResponse';
import {
  CategoryId,
  ID,
  LinkImportList,
  LinkItemWithCategoryIdList,
  UserWithId,
} from '@/lib/types';
import {
  createLink,
  deleteLink,
  getLinksUnderCategory,
  importLinks,
  updateLink,
} from './link.service';
import { Link } from '@prisma/client';

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

export async function updateOne(req: Request, res: Response<Link>, next: NextFunction) {
  try {
    const params = req.params as unknown as ID;
    const body = req.body as LinkItemWithCategoryIdList;
    const user = req.user as unknown as UserWithId;
    const item = await updateLink(body, params.id, user.id);
    res.json(item);
  } catch (error) {
    next(error);
  }
}

export async function deleteOne(req: Request, res: Response<BoolResponse>, next: NextFunction) {
  try {
    const params = req.params as unknown as ID;
    console.log({ params });
    const isDeleted = await deleteLink(params.id);
    res.json({ success: isDeleted });
  } catch (error) {
    next(error);
  }
}

export async function importLinksWithCategories(
  req: Request,
  res: Response<any>,
  next: NextFunction
) {
  try {
    const body = req.body as unknown as LinkImportList;
    const user = req.user as unknown as UserWithId;
    const items = await importLinks(body, user.id);
    res.json(items);
  } catch (error) {
    next(error);
  }
}
