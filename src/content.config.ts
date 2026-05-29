import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const crosses = defineCollection({
  loader: glob({ base: './src/content/crosses', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    author: z.enum(['camus', 'ernaux']),
    number: z.number(),
    filmConcept: z.string(),
    literaryConcept: z.string(),
    camusQuote: z.string().optional(),
    ernauxQuote: z.string().optional(),
    filmScene: z.string().optional(),
    crossAnalysis: z.string(),
    catalogNumber: z.string(),
    references: z.array(z.object({
      id: z.string(),
      citation: z.string()
    })).optional(),
  }),
});

const fragments = defineCollection({
  loader: glob({ base: './src/content/fragments', pattern: '**/*.md' }),
  schema: z.object({
    text: z.string(),
    source: z.string(),
    author: z.enum(['camus', 'ernaux']),
  }),
});

export const collections = { crosses, fragments };
