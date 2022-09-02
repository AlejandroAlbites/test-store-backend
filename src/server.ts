import express from "express";
import cors from "cors";
import db from "./db";
import productRouter from "./routes/product";
import categoryRouter from "./routes/category";

class Server {
  private app: express.Application;
  private port: string;
  private apiPaths = {
    product: "/api/products",
    category: "/api/categories",
  };
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("successful database connection");
    } catch (error) {
      throw new Error("unable to connect to database");
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.apiPaths.product, productRouter);
    this.app.use(this.apiPaths.category, categoryRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`server running in port ${this.port}`);
    });
  }
}

export default Server;
