import { Router } from "express";
import { ProductModel } from "../models/productModel";
import { productModule } from "../factories/productFactories";

import { authentication_middleware } from "../../../config/authentication_middleware";
import { authorization_middleware } from "../../../config/authorization_middleware";

export const productRoutes = Router();

productRoutes.post(
  "/create-product",
  authentication_middleware.check,
  authorization_middleware.checkAdmin,
  productModule.createProduct.bind(productModule)
)

productRoutes.get(
  "/products",
  authentication_middleware.check,
  productModule.getAll.bind(productModule)
)

productRoutes.get(
  "/product/:id", authentication_middleware.check,
  productModule.getProductById.bind(productModule)
)

productRoutes.put("/product/update/:id",
authentication_middleware.check,
authorization_middleware.checkAdmin,
  productModule.updateProduct.bind(productModule)
)
