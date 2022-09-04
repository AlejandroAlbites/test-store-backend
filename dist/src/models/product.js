"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const category_1 = __importDefault(require("./category"));
const db_1 = __importDefault(require("../db"));
const Product = db_1.default.define("Product", {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    url_image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    discount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    category: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
    tableName: "product",
});
category_1.default.hasMany(Product, {
    foreignKey: "category",
    sourceKey: "id",
});
Product.belongsTo(category_1.default, {
    foreignKey: "category",
});
exports.default = Product;
//# sourceMappingURL=product.js.map