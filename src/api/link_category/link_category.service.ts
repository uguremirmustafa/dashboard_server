import db from '@/db';
import { Category } from '@/lib/types';

export async function getAllCategories() {
  const items = await db.category.findMany({
    where: {
      OR: [
        {
          isDeleted: false,
        },
        {
          name: {
            equals: '❤ favorites',
          },
        },
      ],
    },
    select: {
      id: true,
      name: true,
      _count: { select: { links: { where: { isDeleted: false } } } },
    },
  });
  return items.sort((a, b) => b._count.links - a._count.links);
}

export async function createCategory(category: Category) {
  const result = await db.category.create({
    data: {
      name: category.name,
    },
  });
  return result;
}

// export async function getIngredientsUnderCategory(categoryId: number) {
//   return db('ingredient')
//     .innerJoin('food_category', 'food_category.id', 'ingredient.food_category_id')
//     .select(
//       'ingredient.id as ingredientId',
//       'ingredient.name as ingredientName',
//       'food_category.name as categoryName',
//       'food_category.id as categoryId',
//       'ingredient.image as image'
//     )
//     .where('ingredient.food_category_id', categoryId)
//     .orderBy('ingredient.id', 'desc');
// }

// export async function createIngredient(data: Ingredient) {
//   try {
//     const res = await db
//       .insert({
//         name: data.name,
//         description: data.description,
//         food_category_id: data.food_category_id,
//         image: data.image,
//       })
//       .into('ingredient')
//       .returning('*');

//     if (res.length && res.length === 1) {
//       return res[0];
//     } else {
//       throw new Error('sth went wrong while creating ingredient');
//     }
//   } catch (error) {
//     throw new Error('sth went wrong while creating ingredient');
//   }
// }

// export async function updateIngredient(data: Ingredient, id: IngredientWithId['id']) {
//   try {
//     const res = await db
//       .update({
//         name: data.name,
//         description: data.description,
//         food_category_id: data.food_category_id,
//         image: data.image,
//       })
//       .into('ingredient')
//       .where({ id })
//       .returning('*');

//     if (res.length && res.length === 1) {
//       return res[0];
//     } else {
//       throw new Error('sth went wrong while creating ingredient');
//     }
//   } catch (error) {
//     throw new Error('sth went wrong while creating ingredient');
//   }
// }

// export async function deleteIngredient(id: number) {
//   try {
//     const res = await db('ingredient').delete().where({ id });
//     if (res === 1) {
//       return true;
//     } else {
//       throw new Error('sth went wrong while deleting the ingredient');
//     }
//   } catch (error) {
//     throw new Error('sth went wrong while deleting the ingredient');
//   }
// }
