import { prisma } from "./lib/prisma";
import { FastifyInstance } from "fastify";

export function appRoutes(app: FastifyInstance) {
  app.get("/", async () => {
    const habits = await prisma.habit.findMany();

    return "Hello World";
  });
}
