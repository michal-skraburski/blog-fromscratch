import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date(),
	}),
});

const tools = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
	schema: z.object({
		title: z.string(),
		url: z.string().url(),
		description: z.string().optional(),
	}),
});

const inspo = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/inspo' }),
	schema: z.object({
		title: z.string(),
		url: z.string().url(),
		author: z.string().optional(),
		description: z.string().optional(),
	}),
});

export const collections = { blog, tools, inspo };
