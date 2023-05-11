import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { itemRouter } from './routes/item';
import dbConnect from './config/mongo';

const PORT = process.env.PORT || 3535;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', itemRouter);

// app.get('/', (req, res) => {
//   res.status(200).send({ message: 'hello' })
// });

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
});

dbConnect();
