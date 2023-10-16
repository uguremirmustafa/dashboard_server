import db from '@/db';
import { LinkItem, LinkItemWithCategoryIdList, User, UserWithId } from '@/lib/types';

export async function getLinksUnderCategory(categoryId: number) {
  return db.link.findMany({
    where: {
      categories: {
        some: {
          category: {
            id: {
              equals: categoryId,
            },
          },
        },
      },
    },
  });
}

export async function createLink(data: LinkItemWithCategoryIdList, userId: UserWithId['id']) {
  try {
    const res = await db.link.create({
      data: {
        name: data.name,
        path: data.path,
        ownerId: userId,
        categories: {
          create: data.categoryIds.map((x) => ({ categoryId: x.value })),
        },
      },
    });

    if (res) {
      return res;
    } else {
      throw new Error('sth went wrong while creating link');
    }
  } catch (error) {
    throw new Error('sth went wrong while creating link');
  }
}

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
