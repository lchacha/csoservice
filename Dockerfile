FROM node:10
VOLUME ./:/home
WORKDIR /home
COPY .  . 
RUN npm install
EXPOSE 3000


