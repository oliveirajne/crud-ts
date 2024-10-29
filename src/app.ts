import express from 'express';
import dotenv from 'dotenv';
import router from './Routes';
import AppDataSource from './database';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

AppDataSource.initialize()
  .then(() => {
    console.log('Database initialized!');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
