# Stage 1: Build the app
FROM node:18-slim

# Install wget to download Dockerize
RUN apt-get update && apt-get install -y wget

# Download and install Dockerize
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/${DOCKERIZE_VERSION}/dockerize-linux-amd64-${DOCKERIZE_VERSION}.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-${DOCKERIZE_VERSION}.tar.gz \
    && rm dockerize-linux-amd64-${DOCKERIZE_VERSION}.tar.gz

USER node

WORKDIR /usr/src/app

EXPOSE 3000