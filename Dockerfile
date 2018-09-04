FROM ubuntu:latest
RUN  apt-get update
RUN apt-get -y install gnupg2
RUN apt-get -y -qq install curl
RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs
EXPOSE 3000


