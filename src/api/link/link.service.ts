import db from '@/db';
import { LinkItemWithCategoryIdList, UserWithId } from '@/lib/types';

export async function getLinksUnderCategory(categoryId: number) {
  const items = db.link.findMany({
    where: {
      isDeleted: false,
      categories: {
        some: {
          id: categoryId,
        },
      },
    },
    select: {
      id: true,
      name: true,
      path: true,
      icon: true,
      categories: {
        select: {
          name: true,
          id: true,
        },
      },
    },
    orderBy: {
      updatedAt: 'desc',
    },
  });
  const linksWithCategoryOptions: LinkItemWithCategoryIdList[] = (await items).map((x) => ({
    id: x.id,
    name: x.name,
    path: x.path,
    icon: x.icon ?? '',
    categoryIds: x.categories.map((a) => ({ label: a.name, value: a.id })),
  }));
  return linksWithCategoryOptions;
}

export async function createLink(data: LinkItemWithCategoryIdList, userId: UserWithId['id']) {
  try {
    const res = await db.link.create({
      data: {
        name: data.name,
        path: data.path,
        ownerId: userId,
        icon: data.icon,
        categories: {
          connect: data.categoryIds.map((x) => ({ id: x.value })),
        },
      },
    });

    if (res) {
      return res;
    } else {
      throw new Error('sth went wrong while creating item');
    }
  } catch (error) {
    throw new Error('sth went wrong while creating item');
  }
}

export async function updateLink(
  data: LinkItemWithCategoryIdList,
  id: LinkItemWithCategoryIdList['id'],
  userId: UserWithId['id']
) {
  try {
    const link = await db.link.findFirst({
      include: {
        categories: true,
      },
    });

    const newCategories = data.categoryIds.map((x) => x.value);

    const currentCategories = link?.categories.map((x) => x.id) ?? [];
    const categoriesToBeDeleted =
      currentCategories?.filter((x) => !newCategories.includes(x)) ?? [];
    const categoriesToBeAdded = newCategories?.filter((x) => !currentCategories.includes(x)) ?? [];

    const res = await db.link.update({
      where: {
        id: id,
      },
      data: {
        name: data.name,
        path: data.path,
        ownerId: userId,
        icon: data.icon,
        categories: {
          connect: categoriesToBeAdded.map((x) => ({ id: x })),
          disconnect: categoriesToBeDeleted.map((x) => ({ id: x })),
        },
      },
    });

    if (res) {
      return res;
    } else {
      throw new Error('sth went wrong while updating item');
    }
  } catch (error) {
    throw new Error('sth went wrong while updating item');
  }
}

export async function deleteLink(id: number) {
  try {
    const res = await db.link.update({ where: { id: id }, data: { isDeleted: true } });
    if (res) {
      return true;
    } else {
      throw new Error('sth went wrong while deleting the item');
    }
  } catch (error) {
    throw new Error('sth went wrong while deleting the item');
  }
}
