import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import 'dotenv/config'

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('Seeding...')

  const user = await prisma.users.upsert({
    where: { email: 'test@havenly.solutions' },
    update: {},
    create: {
      id: 'test-user-1',
      email: 'test@havenly.solutions',
      name: 'Test User',
      posts: {
        create: {
          id: 'test-post-1',
          title: 'Hello Prisma Postgres!',
          content: 'This is a test post from the seed script.',
        },
      },
    },
  })

  await prisma.posts.upsert({
    where: { id: 'test-post-1' },
    update: {
      title: 'Hello Prisma Postgres!',
      content: 'This is a test post from the seed script.',
      authorId: user.id,
    },
    create: {
      id: 'test-post-1',
      title: 'Hello Prisma Postgres!',
      content: 'This is a test post from the seed script.',
      authorId: user.id,
    },
  })

  console.log({ user })
}

main()
  .then(async () => {
    await prisma.$disconnect()
    await pool.end()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    await pool.end()
    process.exit(1)
  })
