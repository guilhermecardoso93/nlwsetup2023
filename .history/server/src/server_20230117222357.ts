import Fastify from "fastify";
import cors from "@fastify/cors";
import { prisma } from "./lib/prisma";

const app = Fastify();

app.register(cors);

app.get("/", async () => {
  const habits = await prisma.habit.findMany();

  return "Hello World";
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running!");
  });
