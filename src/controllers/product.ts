import { CategoryEntry } from "./../models/category";
import { Request, Response } from "express";
import Product from "../models/product";
import Category from "../models/category";
import { Op } from "sequelize";
import { validationResult } from "express-validator";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const name: string = req.query.name as string;
    const categoryId: string = req.query.category as string;

    const category: CategoryEntry | null = await Category.findByPk(categoryId);

    const params: any = {
      include: Category,
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    };
    if (category !== null) {
      params.where.category = category?.id;
    }

    const { count, rows } = await Product.findAndCountAll(params);

    return res.json({
      ok: true,
      msg: "products found",
      count,
      rows,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "products not found",
    });
  }
};
