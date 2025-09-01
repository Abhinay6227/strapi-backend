// config/env/production/database.js

module.exports = ({ env }) => {
  const connection = {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
    },
    pool: {
      min: env.int('DATABASE_POOL_MIN', 2),
      max: env.int('DATABASE_POOL_MAX', 10),
    },
    acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
  };

  // Only add the SSL object if DATABASE_SSL is true
  if (env.bool('DATABASE_SSL', false)) {
    connection.connection.ssl = { rejectUnauthorized: false };
  }

  return connection;
};