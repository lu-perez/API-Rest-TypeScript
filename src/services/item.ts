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

const updateCar = async (id: string, item: Car) => {
  return await itemModel.findByIdAndUpdate(
    { _id: id },
    item,
    { new: true }
  );
}

const deleteCar = async (id: string) => {
  return await itemModel.findByIdAndDelete(id);
}

export { 
  insertCar,
  getCars,
  getCar,
  updateCar,
  deleteCar
}
