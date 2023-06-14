FROM node:bullseye-slim

# Create app directory
WORKDIR /home/node/challenge2

# Install app dependencies
COPY package.json ./

RUN npm install

# copy app source
COPY . .

EXPOSE 8080
CMD node app.js