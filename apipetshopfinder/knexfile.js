// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "petshopfinder",
      user: "postgres",
      password: "123",
    },
    migrations: {
      directory: './database/migrations' 
    },
    seeds: {
      directory: './database/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
      database: 'my_db',
      user:     'username',
      password: 'password'
    ,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/database/migrations'
    },
    seeds: {
      directory: __dirname + '/database/seeds'
    }
  }

};
