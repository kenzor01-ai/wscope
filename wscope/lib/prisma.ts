import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient({
  datasources: {
    db: {
      url: process.env.postgres://d8bf8f3fc586bb87632b946ffa7bbf0ee0419b44c853d747b099cf0991a712c4:sk_dy7dqpPmo6vt2Uc_ohaZf@db.prisma.io:5432/postgres?sslmode=require
    },
  },
});

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;


