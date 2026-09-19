/** Fallback cover image used when an entry has no `image` in its frontmatter. */
export const PLACEHOLDER = '/placeholder.svg';

/** Returns the entry's image, or the shared placeholder when none is set. */
export const cover = (image?: string): string => image ?? PLACEHOLDER;
