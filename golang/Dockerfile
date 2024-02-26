# Step 1: Build the application
FROM golang:1.17-alpine AS builder

WORKDIR /app

COPY . .

RUN CGO_ENABLED=0 go mod init cadupm/fullcycle-desafio-docker && \
    go build -ldflags "-s -w" -o myapp

# Step 2: Create a minimal image to run the application from scratch
FROM scratch

WORKDIR /app

COPY --from=builder /app/myapp /app/myapp

CMD ["./myapp"]
