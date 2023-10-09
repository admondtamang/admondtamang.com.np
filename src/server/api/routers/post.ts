import { z } from "zod";

import { Posts } from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.posts.findMany() as Promise<Posts[]>;
  }),
  getOne: publicProcedure.query(({ input, ctx }) => {
    console.log(input, "hello");

    return ctx.db.posts.findFirstOrThrow({
      where: {
        slug: input,
      },
    }) as Promise<Posts>;
  }),
});
