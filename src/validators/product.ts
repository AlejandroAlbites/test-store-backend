const { check } = require("express-validator"); //TODO <---
import { Request, Response, NextFunction } from "express";
const { validationResult } = require("express-validator");

const validateResult = (req: Request, res: Response, next: NextFunction) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err) {
    res.status(403);
    res.send({ errors: err });
  }
};

export const validateQueries = [
  check("name").default(""),
  check("category", "The value must be an integer")
    .default(0)
    .isNumeric()
    .custom((value: any, { req }: any) => {
      if (value < 0 || value > 7) {
        throw new Error("Category range must be between 0 and 7");
      }
      return true;
    }),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];
