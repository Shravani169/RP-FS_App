# Use an official Node.js runtime as a parent image
FROM node:18 as build
# FROM ubuntu
# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

FROM nginx:alpine

#COPY . .
# Use a smaller image as the final production image

# Copy the built app to the Nginx web server directory
#COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 5555

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
