import express from "express";
import { productRoute } from "../modules/products/product.route";

const router = express.Router();
const moduleRoutes = [
  {
    path: "/",
    route: productRoute,
  },
];

moduleRoutes.map((route) => router.use(route.path, route.route));
