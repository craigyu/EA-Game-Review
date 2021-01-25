FROM node:14.15.4

# Create app directory
WORKDIR /app

# Install app dependencies
COPY api/package*.json ./

RUN npm install

# Bundle app source
COPY api /app

EXPOSE 5000
CMD [ "npm", "start" ]