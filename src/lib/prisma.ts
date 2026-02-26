import 'dotenv/config';
import mariadb from 'mariadb';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../../generated/prisma';

const pool = mariadb.({
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT) || 3306,
  user: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || 'mvmC',
  database: process.env.DATABASE_NAME || 'store-database',
  connectionLimit: 5,
});

const adapter = new PrismaMariaDb(pool);

const prisma = new PrismaClient({ adapter });

export { prisma };