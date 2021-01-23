FROM node:14.15.4

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY api/package*.json ./

RUN npm install

# Bundle app source
COPY api /app

EXPOSE 8080
CMD [ "npm", "start" ]