'use strict';
const promiseRouter = require('express-promise-router');
const express = require('express');
const bodyParser = require('body-parser');



// Constants
const PORT = 8080;

// register API
const router = promiseRouter();

// App
const app = express();
app.get('/', (req, res) => {
  res.send(200);
});

app.use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .use(router)
  .set('json spaces', 2)
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
  console.log('LiteFarm Backend listening on port ' + PORT + '!');
});

