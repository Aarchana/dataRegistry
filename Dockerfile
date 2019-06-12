FROM node:10.15.3-alpine as builder
# Preparing working environment.
RUN mkdir -p /usr/src/data-entry-app
WORKDIR /usr/src/data-entry-app
# Installing dependencies.
COPY package*.json /usr/src/data-entry-app/
RUN npm install
# Copy data-entry-app source into image.
COPY . /usr/src/data-entry-app
# Building app.
RUN npm run-script build
### STAGE 2: Setup ###
FROM nginx:1.13.12-alpine
# Removing nginx default page.
RUN rm -rf /usr/share/nginx/html/*
# Copying nginx configuration.
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copying data-entry-app source into web server root.
COPY --from=builder /usr/src/data-entry-app/dist/DataEntryApp /usr/share/nginx/html
# Exposing ports.
EXPOSE 80