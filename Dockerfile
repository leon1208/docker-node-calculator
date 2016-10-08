FROM node:6.6

# working dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install npm module
COPY package.json /usr/src/app/
RUN npm install

# copy src to file
COPY . /usr/src/app

# expose port
EXPOSE 8888

# start node
CMD ["node", "service.js"]
