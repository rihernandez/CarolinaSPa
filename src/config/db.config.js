module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "toor",
    DB: "carolina_spa_db",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};

// module.exports = {
//     HOST: "queenie.db.elephantsql.com",
//     USER: "knbknhlm",
//     PASSWORD: "wVokDA8GRR3YExyd1kYBkKLMMX5cXIKg",
//     DB: "knbknhlm",
//     dialect: "postgres",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000,
//     },
// };