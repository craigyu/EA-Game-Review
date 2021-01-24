'use strict';
const promiseRouter = require('express-promise-router');
const express = require('express');
const bodyParser = require('body-parser');
const Knex = require('knex');
const {Model} = require('objection');
const config = require('../knexfile');

// import routes
const userRoute = require('./routes/userRoute');
const blogRoute = require('./routes/blogRoute');
const commentRoute = require('./routes/commentRoute');

// Constants
const PORT = 8080;

// initialize Knex
const knex = Knex(config.development);

(async () => {
  try {
    await knex.migrate.latest();
    await knex.seed.run();
  } catch (e) {
    console.log(e);
  }
})();

// bind all models to a Knex instance
Model.knex(knex);

// register API
const router = promiseRouter();

// App
const app = express();
app.get('/', (req, res) => {
  res.sendStatus(200);
});

// bodyParser gives req.body option for later
app.use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))

  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
    next();
  })

  .use(router)
  .set('json spaces', 2)

  // register paths
  .use('/user', userRoute)
  .use('/blog', blogRoute)
  .use('/comment', commentRoute)

  // handle errors
  .use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
  })


  .use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    })
  });

app.listen(PORT, () => {
  console.log('Review Backend listening on port ' + PORT + '!');
});

