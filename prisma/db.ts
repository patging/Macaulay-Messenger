import { PrismaClient } from '@prisma/client'

const globalPrisma = global as unknown as { prisma: PrismaClient }

export const prisma : PrismaClient = globalPrisma.prisma || new PrismaClient();

globalPrisma.prisma = prisma;

/*
  Why is this here?

  If you instantiate a prisma client everytime in the endpoint you're going to have too many
  processes and perhaps crash the db. In this case, mostly because we aren't going to get absurd read traffic
  (and most certainly not absurd write traffic) we'll have one instance. We don't need more than one atm.

  In the future if this thing pops off perhaps we'll move to something different (maybe mongodb or smth)

  Oh btw I got this very nice recomendation from https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices

  01/10/23
  -PG
*/