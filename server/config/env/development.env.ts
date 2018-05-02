module.exports = {
  env: "development",
  secret: "S3cr3t",
  serverPort: 3000,
  postgres: {
    database: "ts-api",
    dialect: "postgres",
    username: "postgres",
    password: "secret",
    port: 5432,
    dbURL: "postgres://postgres:secret@db:5432/ts-api"
  }
};
