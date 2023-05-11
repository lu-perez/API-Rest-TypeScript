import { Request, Response } from 'express';
import { errorHandler } from '../utils/error.handler';

const getItem = (req: Request, res: Response) => {
  try {
    res.status(200).send({ data: 'data' });
  } catch (error) {
    errorHandler(res, 'ERROR_GET_ITEM');
  }
}

const getItems = (req: Request, res: Response) => {
  try {
    res.status(200).send({ data: 'data' });
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

const postItem = (req: Request, res: Response) => {
  try {
    res.status(200).send({ data: 'data' });
  } catch (error) {
    errorHandler(res, 'ERROR_POST_ITEM');
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