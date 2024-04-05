import { Sequelize } from "sequelize";

const db = new Sequelize("roxy_groub", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

export default db;
