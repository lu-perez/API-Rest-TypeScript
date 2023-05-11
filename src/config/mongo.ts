import 'dotenv/config'
import { connect } from 'mongoose'

export default async function dbConnect(): Promise<void> {
  const DB_URI = <string>process.env.DB_URI;
  try {
    await connect(DB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
}
