import { Request, Response, Router } from 'express';
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/item'

const itemRouter = Router()

itemRouter.get('/items', getItems);
itemRouter.get('/item/:id', getItem);
itemRouter.post('/item', postItem);
itemRouter.put('/item/:id', updateItem);
itemRouter.delete('/item/:id', deleteItem);

export { itemRouter }
