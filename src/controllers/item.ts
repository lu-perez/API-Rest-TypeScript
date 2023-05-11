import { Request, Response } from 'express';
import { errorHandler } from '../utils/error.handler';
import { getCar, getCars, insertCar } from '../services/item';

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const item = await getCar(params.id);
    res.status(200).send({ item });
  } catch (error) {
    errorHandler(res, 'ERROR_GET_ITEM');
  }
}

const getItems = async (req: Request, res: Response) => {
  try {
    const items = await getCars();
    res.status(200).send({ items });
  } catch (error) {
    errorHandler(res, 'ERROR_GET_ITEMS');
  }
}

const updateItem = (req: Request, res: Response) => {
  try {
    res.status(200).send({ data: 'data' });
  } catch (error) {
    errorHandler(res, 'ERROR_UPDATE_ITEM');
  }
}

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const postedItem = await insertCar(body);
    res.status(200).send({ postedItem });
  } catch (error) {
    errorHandler(res, 'ERROR_POST_ITEM', error);
  }
}

const deleteItem = (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    errorHandler(res, 'ERROR_DELETE_ITEM');
  }
}

export { 
  getItem,
  getItems,
  updateItem,
  postItem,
  deleteItem
}