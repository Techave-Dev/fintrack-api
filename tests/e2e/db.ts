import { randomUUID } from 'node:crypto'
import type { INestApplication } from '@nestjs/common'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../../src/generated/prisma/client'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL ?? '',
})
const prisma = new PrismaClient({ adapter })

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

async function getTableNames(): Promise<string[]> {
  const rows = await prisma.$queryRawUnsafe<Array<{ tablename: string }>>(
    `SELECT tablename FROM pg_tables WHERE schemaname = 'public'`,
  )
  return rows.map((r) => r.tablename)
}

export async function truncateAll() {
  const tables = await getTableNames()
  if (tables.length === 0) return
  const tableList = tables.join(', ')
  await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${tableList} RESTART IDENTITY CASCADE`)
}

export async function disconnect() {
  await prisma.$disconnect()
}

export { prisma }
