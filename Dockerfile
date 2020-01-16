#base image
FROM node

# set working directory
RUN mkdir /docker
#copy all files from current directory to docker
COPY . /docker

WORKDIR /docker/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /docker/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN install

# start app
CMD ["npm", "start"]