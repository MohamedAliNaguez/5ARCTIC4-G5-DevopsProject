# Use nginx to serve the Angular app
FROM nginx:alpine

# Copy the pre-built Angular app from the local build directory into the Nginx web directory
# Ensure 'dist' contains the production-ready build of your Angular app
COPY dist /usr/share/nginx/html

# Optional: Uncomment the following line to use a custom nginx configuration
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose the default HTTP port
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]