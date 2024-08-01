import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// @path; /api/products
// @desc: GET get all products
router.get("/", getProducts);

// @path; /api/products/:id
// @desc: GET get product by id
router.get("/:id", getProductById);

// @path; /api/products
// @desc: POST create a new product
router.post("/", createProduct);

// @path: /api/products/:id
// @desc: PUT update product
router.put("/:id", updateProduct);

// @path: /api/products/:id
// @desc: DELETE delete product
router.delete("/:id", deleteProduct);

export default router;
