import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const deleteAllLinks = await prisma.link.deleteMany({});
  console.log('deleteAllLinks', deleteAllLinks);
  const deleteAllCategories = await prisma.category.deleteMany({});
  console.log('deleteAllCategories', deleteAllCategories);

  const categories = await prisma.category.createMany({
    data: [
      { name: '❤ favorites', id: 1 },
      { name: '🏠 ximmio modules - local', id: 2 },
      { name: '💻 ximmio modules - dev', id: 3 },
      { name: '🧪 ximmio modules - accp', id: 4 },
      { name: '🌆 ximmio modules - prod', id: 5 },
      { name: '🛬 ximmio platforms', id: 6 },
    ],
  });
  console.log('create categories', categories);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
