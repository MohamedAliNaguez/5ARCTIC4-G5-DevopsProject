# Stage 1: Build the Angular app
FROM node:14 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --prod --output-path=dist

# Stage 2: Serve the Angular app with nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/nginx.conf  # Optional: Custom nginx config
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
