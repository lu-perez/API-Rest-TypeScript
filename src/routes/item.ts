import { Request, Response, Router } from 'express';
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/item'

const itemRouter = Router()

itemRouter.get('/items', getItems);
itemRouter.get('/item/:id', getItem);
itemRouter.post('/', postItem);
itemRouter.put('/:id', updateItem);
itemRouter.delete('/:id', deleteItem);

export { itemRouter }
