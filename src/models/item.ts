import { Schema, Types, model, Model } from 'mongoose';
import { Car } from '../interface/car.interface';

const ItemSchema = new Schema<Car>(
  {
    color: {
      type: String
    },
    power: {
      type: String,
      enum: ['gasoline', 'electric']
    },
    year: {
      type: Number
    },
    description: {
      type: String
    },
    price: {
      type: Number
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const itemModel = model('items', ItemSchema);
export default itemModel;
