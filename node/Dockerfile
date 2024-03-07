# Stage 1: Build the app
FROM node:18 as builder

WORKDIR /usr/src/app

# Copy only package files
COPY package*.json ./

# Copy the necessary files
COPY index.js ./

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

# Copy only package files
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/index.js ./
COPY --from=builder /usr/src/app/node_modules ./node_modules

EXPOSE 3000
