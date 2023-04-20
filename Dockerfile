FROM node:latest

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port on which the development server is listening
EXPOSE 5173

# Start the development server
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]
