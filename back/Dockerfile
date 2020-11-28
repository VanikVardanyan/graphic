FROM golang:1.14
# Copy everything from the current directory to the PWD (Present Working Directory) inside the container
COPY . .

# Download all the dependencies
RUN go build -o app *.go

# # Install the package
# RUN go install -v ./...

VOLUME ccs:latest

# This container exposes port 8080 to the outside world
EXPOSE 8080

# Run the executable
CMD ["./app"]
