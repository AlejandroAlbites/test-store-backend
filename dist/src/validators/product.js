"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQueries = void 0;
const { check } = require("express-validator"); //TODO <---
const { validationResult } = require("express-validator");
const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    }
    catch (err) {
        res.status(403);
        res.send({ errors: err });
    }
};
exports.validateQueries = [
    check("name").default(""),
    check("category", "The value must be an integer")
        .default(0)
        .isNumeric()
        .custom((value, { req }) => {
        if (value < 0 || value > 7) {
            throw new Error("Category range must be between 0 and 7");
        }
        return true;
    }),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];
//# sourceMappingURL=product.js.map