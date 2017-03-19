# install node for buiding
FROM node:6.9.5

USER root

ENV HOME=/home/app

WORKDIR $HOME

ENV APP_NAME=angular2-tour-of-heroes

# Copy sources to build inside the container
COPY . $HOME/$APP_NAME/

# Set working dir
WORKDIR $HOME/$APP_NAME


# install dependencies
RUN npm install


#Build app as production mode
RUN npm run build.prod


# Install nginx
FROM nginx

COPY dist /var/www/webapp
COPY deployment/nginx.conf /etc/nginx/nginx.conf
COPY deployment/webapp.conf /etc/nginx/sites-enabled/webapp.conf
EXPOSE 80 443
