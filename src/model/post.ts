import { z } from 'zod';

export const Post = z.object({
  userId: z.string(),
  id: z.string(),
  title: z.string(),
  body: z.string(),
});

export type Post = z.infer<typeof Post>;
