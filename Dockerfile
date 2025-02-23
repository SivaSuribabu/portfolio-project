# Development Dockerfile for React application
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port 5173 (Vite's default dev server port)
EXPOSE 5173

# Start development server
# Using host 0.0.0.0 to make the server accessible outside the container
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]