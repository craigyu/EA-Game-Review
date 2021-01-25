const path = require("path");

module.exports = {
  development: {
    client: "sqlite3",
    connection: ":memory:",
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, "/DB/migrations")
    },
    seeds: {
      directory: path.join(__dirname, "/DB/seeds")
    },
    pool: {
      min: 1,
      max: 1,
      destroyTimeoutMillis: 360000000,
      idleTimeoutMillis: 360000000
    },
  },
  test: {
    client: "sqlite3",
    connection: ":memory:",
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, "/DB/migrations")
    },
    seeds: {
      directory: path.join(__dirname, "/DB/test/seeds")
    },
    pool: {
      min: 1,
      max: 1,
      destroyTimeoutMillis: 360000000,
      idleTimeoutMillis: 360000000
    },
  },

};