import { defineCollection, z } from 'astro:content';

const keynotesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    description: z.string().optional(),
    vocab: z.array(z.object({
      term: z.string(),
      def: z.string()
    })).optional(),
    homework: z.string().optional(),
  }),
});

export const collections = {
  keynotes: keynotesCollection,
};
