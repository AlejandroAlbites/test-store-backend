import { DataTypes, Model } from "sequelize";
import db from "../db";

export interface CategoryEntry extends Model {
  id: string;
  name: string;
  Products?: Array<object>;
}

const Category = db.define<CategoryEntry>(
  "Category",
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
  },
  {
    timestamps: false,
    tableName: "category",
  }
);

export default Category;
