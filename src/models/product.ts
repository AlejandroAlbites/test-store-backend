import { DataTypes, Model } from "sequelize";
import Category from "./category";
import db from "../db";

export interface ProductEntry extends Model {
  id: number;
  name: string;
  url_image: string;
  price: number;
  discount: number;
  category: number;
}

const Product = db.define<ProductEntry>(
  "Product",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "product",
  }
);

Category.hasMany(Product, {
  foreignKey: "category",
  sourceKey: "id",
});

Product.belongsTo(Category, {
  foreignKey: "category",
});

export default Product;
