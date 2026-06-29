import { randomUUID } from 'node:crypto'
import type { INestApplication } from '@nestjs/common'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../../src/generated/prisma/client'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL ?? '',
})
const prisma = new PrismaClient({ adapter })

type TableName = 'refresh_tokens' | 'transactions' | 'categories' | 'users'

const TABLES: TableName[] = ['refresh_tokens', 'transactions', 'categories', 'users']

let app: INestApplication

export const uniq = (p: string) => `${p}-${randomUUID().slice(0, 8)}`

export function setApp(a: INestApplication) {
  app = a
}

export function getApp() {
  return app
}

export function server() {
  return app.getHttpServer()
}

export async function truncateAll() {
  const tableList = TABLES.join(', ')
  await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${tableList} RESTART IDENTITY CASCADE`)
}

export async function disconnect() {
  await prisma.$disconnect()
}

export { prisma }
