# Use a small node image to build
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --silent
COPY . .
RUN npm run build

# Production image
FROM node:18-alpine
WORKDIR /app
# Serve with a minimal static server (or use a proper web server in prod)
RUN npm i -g serve --silent
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]