"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Sequelize } from "sequelize";
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("bsale_test", "bsale_test", "bsale_test", {
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    dialect: "mysql",
    // query: { raw: true },
});
exports.default = db;
//# sourceMappingURL=db.js.map