import { z } from 'zod';

export const Post = z.object({
  userId: z.string(),
  id: z.string(),
  title: z.string(),
  body: z.boolean(),
});

export type Post = z.infer<typeof Post>;
