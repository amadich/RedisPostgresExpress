# Use official Node.js base image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
