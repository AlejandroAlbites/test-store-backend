import { Request, Response } from "express";
import Category from "../models/category";
import Product from "../models/product";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.findAll({
      include: {
        model: Product,
      },
    });

    const categoryWithAmount = categories.map((item) => {
      return {
        id: item.id,
        name: item.name,
        amount: item.Products?.length,
      };
    });

    return res.json({
      ok: true,
      msg: "categories found",
      categories: categoryWithAmount,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "categories not found",
    });
  }
};
