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
exports.getCategories = void 0;
const category_1 = __importDefault(require("../models/category"));
const product_1 = __importDefault(require("../models/product"));
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_1.default.findAll({
            include: {
                model: product_1.default,
            },
        });
        const categoryWithAmount = categories.map((item) => {
            var _a;
            return {
                id: item.id,
                name: item.name,
                amount: (_a = item.Products) === null || _a === void 0 ? void 0 : _a.length,
            };
        });
        const allProducts = {
            id: 0,
            name: "todos",
            amount: 57,
        };
        categoryWithAmount.push(allProducts);
        categoryWithAmount.reverse();
        return res.json({
            ok: true,
            msg: "categories found",
            categories: categoryWithAmount,
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: "categories not found",
        });
    }
});
exports.getCategories = getCategories;
//# sourceMappingURL=category.js.map