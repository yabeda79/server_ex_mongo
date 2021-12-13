import { Request, Response } from "express";
import {
  TCreateProductSchema,
  TUpdateProductSchema,
} from "../../schemas/product/types";
import {
  createProduct,
  deleteProduct,
  findAndUpdateProduct,
  findProduct,
} from "../../services/product";
import logger from "../../utils/logger";
export const createProductHandler = async (
  req: Request<{}, {}, TCreateProductSchema["body"]>,
  res: Response
) => {
  try {
    const userId = res.locals.user._id;

    const body = req.body;

    const product = await createProduct({ ...body, user: userId });

    return res.send(product);
  } catch (e) {
    logger.error((e as Error).message);
    return res.status(500).send("Something went wrong, try again later");
  }
};

export const updateProductHandler = async (
  req: Request<TUpdateProductSchema["params"]>,
  res: Response
) => {
  try {
    const userId = res.locals.user._id;

    const productId = req.params.productId;

    const update = req.body;

    const product = await findProduct({ productId });

    if (!product) {
      return res.sendStatus(404);
    }

    if (product.user != userId) {
      res.sendStatus(403);
    }

    const updatedProduct = await findAndUpdateProduct({ productId }, update, {
      new: true,
    });

    return res.send(updatedProduct);
  } catch (e) {
    logger.error((e as Error).message);
    return res.status(500).send("Something went wrong, try again later");
  }
};

export const getProductHandler = async (
  req: Request<TUpdateProductSchema["params"]>,
  res: Response
) => {
  try {
    const productId = req.params.productId;

    const product = await findProduct({ productId });

    if (!product) {
      return res.sendStatus(404);
    }

    return res.send(product);
  } catch (e) {
    logger.error((e as Error).message);
    return res.status(500).send("Something went wrong, try again later");
  }
};

export const deleteProductHandler = async (
  req: Request<TUpdateProductSchema["params"]>,
  res: Response
) => {
  try {
    const userId = res.locals.user._id;

    const productId = req.params.productId;

    const product = await findProduct({ productId });

    if (!product) {
      return res.sendStatus(404);
    }

    if (product.user != userId) {
      res.sendStatus(403);
    }

    await deleteProduct({ productId });

    return res.sendStatus(200);
  } catch (e) {
    logger.error((e as Error).message);
    return res.status(500).send("Something went wrong, try again later");
  }
};
