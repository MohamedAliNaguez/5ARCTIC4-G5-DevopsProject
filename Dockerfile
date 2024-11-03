# Use an OpenJDK image as the base for the backend
FROM openjdk:17-jdk-alpine AS backend-build

# Define build arguments for Nexus configuration
ARG NEXUS_URL
ARG GROUP_ID
ARG ARTIFACT_ID
ARG VERSION

# Install curl and download the backend JAR from Nexus
RUN apk add --no-cache curl && \
    curl -o app.jar "$NEXUS_URL/repository/maven-releases/${GROUP_ID//.//}/$ARTIFACT_ID/$VERSION/$ARTIFACT_ID-$VERSION.jar"

# Use a Node.js image to build the frontend
FROM node:14-alpine AS frontend-build

# Define build arguments for Nexus configuration
ARG NEXUS_URL
ARG GROUP_ID
ARG FRONTEND_ARTIFACT_ID
ARG VERSION

# Install curl and unzip, download the frontend artifact, and extract it
RUN apk add --no-cache curl unzip && \
    curl -o frontend.zip "$NEXUS_URL/repository/maven-releases/${GROUP_ID//.//}/$FRONTEND_ARTIFACT_ID/$VERSION/$FRONTEND_ARTIFACT_ID-$VERSION.zip" && \
    unzip frontend.zip -d /app

# Use a lightweight Nginx image to serve the frontend
FROM nginx:alpine

# Copy the frontend build output to the Nginx HTML directory
COPY --from=frontend-build /app/dist/station-ski-front /usr/share/nginx/html

# Copy the backend JAR file
COPY --from=backend-build app.jar /app.jar

# Expose the application port
EXPOSE 8089

# Start both the backend and frontend services
CMD ["sh", "-c", "java -jar /app.jar & nginx -g 'daemon off;'"]
