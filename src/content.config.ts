import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date(),
		// Optional: attach this post to a project in the `projects` collection.
		project: reference('projects').optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date().optional(),
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

export const collections = { blog, tools, inspo, projects };
