# Backend Build Stage
FROM openjdk:17-jdk-alpine AS backend-build

# Define build arguments for Nexus configuration
ARG NEXUS_URL
ARG GROUP_ID
ARG ARTIFACT_ID
ARG VERSION

# Install curl and download the backend JAR from Nexus
RUN apk add --no-cache curl && \
    curl -o app.jar "$NEXUS_URL/repository/maven-releases/${GROUP_ID//.//}/$ARTIFACT_ID/$VERSION/$ARTIFACT_ID-$VERSION.jar"

# Frontend Build Stage
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

# Backend Image Stage
FROM openjdk:17-jdk-alpine AS backend-final
COPY --from=backend-build app.jar /app.jar

# Expose the backend port
EXPOSE 8089

# Start the backend service
CMD ["java", "-jar", "/app.jar"]

# Frontend Image Stage
FROM nginx:alpine AS frontend-final
# Updated to a supported version of Alpine
COPY --from=frontend-build /app/dist/station-ski-front /usr/share/nginx/html

# Expose the frontend port
EXPOSE 80

# Start the Nginx service
CMD ["nginx", "-g", "daemon off;"]
