module.exports = {
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "example",
  database: "eduzz_teste",
  synchronize: true,
  logging: true,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};
