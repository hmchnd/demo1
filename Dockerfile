# Stage: Base image with dependencies
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy rest of app
COPY . .

# Expose Vite port
EXPOSE 8080

# Start Vite dev server (not for production)
CMD [ "npm", "run", "dev" ]
