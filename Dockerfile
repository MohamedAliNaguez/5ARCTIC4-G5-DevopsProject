# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-alpine

# Set up environment variables
ARG NEXUS_URL=http://192.168.145.128:8081
ARG NEXUS_REPOSITORY=AyedSki
ARG ARTIFACT_ID=gestion-station-ski
ARG VERSION=1.0.0

# Set the working directory in the container
WORKDIR /app

# Use wget to fetch the JAR from Nexus repository
RUN wget ${NEXUS_URL}/repository/${NEXUS_REPOSITORY}/${ARTIFACT_ID}/${VERSION}/${ARTIFACT_ID}-${VERSION}.jar -O app.jar

# Expose the application port (change if your app uses a different port)
EXPOSE 8089

# Run the JAR file
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
