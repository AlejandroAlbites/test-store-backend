import { validateQueries } from "./../validators/product";
import { Router } from "express";
import { getProducts } from "./../controllers/product";
const router = Router();

router.get("/", validateQueries, getProducts);

export default router;
