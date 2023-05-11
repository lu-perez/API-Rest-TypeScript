import { Car } from '../interface/car.interface';
import itemModel from '../models/item';

const insertCar = async (item: Car) => {
  return await itemModel.create(item);
}

const getCars = async () => {
  return await itemModel.find({});
}

const getCar = async (id: string) => {
  return await itemModel.findOne({ _id: id });
}

export { 
  insertCar,
  getCars,
  getCar
}
