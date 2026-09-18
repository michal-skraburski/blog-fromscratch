# syntax=docker/dockerfile:1

# --- Build stage: compile the static Astro site ---
FROM node:22-alpine AS build
WORKDIR /app

# pnpm (repo has no packageManager field, so pin it explicitly)
RUN npm install -g pnpm@11

# Install deps first for better layer caching
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# Build
COPY . .
RUN pnpm build

# --- Runtime stage: serve dist/ with nginx ---
FROM nginx:1.27-alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1
