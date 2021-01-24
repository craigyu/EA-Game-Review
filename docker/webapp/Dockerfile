FROM node:14.15.4

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY webapp/package.json ./
COPY webapp/package-lock.json ./

RUN npm install
RUN npm install react-scripts@4.0.1 -g

COPY webapp /app

EXPOSE 3000
CMD ["npm", "start"]