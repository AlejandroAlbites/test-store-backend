"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./../validators/product");
const express_1 = require("express");
const product_2 = require("./../controllers/product");
const router = (0, express_1.Router)();
router.get("/", product_1.validateQueries, product_2.getProducts);
exports.default = router;
//# sourceMappingURL=product.js.map