import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			pubDate: z.coerce.date(),
			// Optional: attach this post to a project in the `projects` collection.
			project: reference('projects').optional(),
			// Optional cover image; a placeholder is used when omitted.
			image: image().optional(),
		}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			pubDate: z.coerce.date().optional(),
			// Optional cover image; a placeholder is used when omitted.
			image: image().optional(),
		}),
});

const tools = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			url: z.string().url(),
			description: z.string().optional(),
			// Optional: date added, so bookmarks can surface in the home "latest" feed.
			pubDate: z.coerce.date().optional(),
			// Optional cover image; a placeholder is used when omitted.
			image: image().optional(),
		}),
});

const inspo = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/inspo' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			url: z.string().url(),
			author: z.string().optional(),
			description: z.string().optional(),
			// Optional: date added, so inspirations can surface in the home "latest" feed.
			pubDate: z.coerce.date().optional(),
			// Optional cover image; a placeholder is used when omitted.
			image: image().optional(),
		}),
});

export const collections = { blog, tools, inspo, projects };
