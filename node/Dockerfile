# Stage 1: Build the app
FROM node:18 as builder

WORKDIR /usr/src/app

# Copy the necessary files
COPY index.js ./
COPY package*.json ./

# Install the dependencies
RUN npm install

# Stage 2: Run the app
FROM node:18

WORKDIR /usr/src/app

# Install wget to download Dockerize
RUN apt-get update && apt-get install -y wget

# Download and install Dockerize
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/${DOCKERIZE_VERSION}/dockerize-linux-amd64-${DOCKERIZE_VERSION}.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-${DOCKERIZE_VERSION}.tar.gz \
    && rm dockerize-linux-amd64-${DOCKERIZE_VERSION}.tar.gz

# Copy the necessary files
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/index.js ./

EXPOSE 3000
