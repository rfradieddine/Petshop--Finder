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
    connection: {
      host: 'dpg-coo5vbev3ddc738h99lg-a.oregon-postgres.render.com',
      port: 5432,
      database: 'todolist_lc7g',
      user: 'admin',
      password: 'FekYfRHWQWpregAlAvChvpmKeIwMnxFS',
      ssl: { rejectUnauthorized: false } 
    },
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
