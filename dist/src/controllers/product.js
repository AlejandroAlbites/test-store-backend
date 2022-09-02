"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
const category_1 = __importDefault(require("../models/category"));
const sequelize_1 = require("sequelize");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.query.name;
        const categoryId = req.query.category;
        const category = yield category_1.default.findByPk(categoryId);
        const params = {
            include: category_1.default,
            where: {
                name: {
                    [sequelize_1.Op.like]: `%${name}%`,
                },
            },
        };
        if (category !== null) {
            params.where.category = category === null || category === void 0 ? void 0 : category.id;
        }
        const { count, rows } = yield product_1.default.findAndCountAll(params);
        return res.json({
            ok: true,
            msg: "products found",
            count,
            rows,
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: "products not found",
        });
    }
});
exports.getProducts = getProducts;
//# sourceMappingURL=product.js.map