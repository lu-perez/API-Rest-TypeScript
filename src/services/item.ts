import { Car } from '../interface/car.interface';
import itemModel from '../models/item';

const insertCar = async (item: Car) => {
  const responseInsert = await itemModel.create(item);
  return responseInsert;
}

const getCars = async () => {
  const responseItems = await itemModel.find({});
  return responseItems;
}

export { insertCar, getCars }
