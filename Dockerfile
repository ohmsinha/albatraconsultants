# Use Nginx to serve the website
FROM nginx:alpine

# Copy all your website files from your folder into the web server folder
COPY . /usr/share/nginx/html

# Tell the server to listen on port 8080 for Google Cloud
EXPOSE 8080
RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]