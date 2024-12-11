FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package manifests
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the code
RUN yarn run tsc

# Expose ports
# 8080 is the app server port, 9464 for metrics
EXPOSE 8080 9464

# Run the application
CMD ["node", "./dist/index.js"]
