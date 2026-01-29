# Stage 1: Build the website
FROM node:18-alpine as builder
WORKDIR /app

# Install the tools needed to translate the code
COPY package*.json ./
RUN npm install

# Translate (Build) the website
COPY . .
RUN npm run build

# Stage 2: Serve the website
FROM nginx:alpine
# Copy the translated files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Configure Port 8080 for Google Cloud
RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
