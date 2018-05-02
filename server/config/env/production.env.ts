module.exports = {
  env: "production",
  secret: "secret",
  serverPort: 3000,
  postgres: {
    database: "ts_api",
    dialect: "postgres",
    username: "user",
    password: "secret",
    port: 5432,
    dbURL: "rds-url.rds.amazonaws.com"
  }
};
