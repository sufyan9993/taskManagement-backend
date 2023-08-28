import express from 'express'
import  cors from 'cors'
import taskRouter from './router/taskRoutes.js';
import dotenv from 'dotenv'
dotenv.config()


const app = express();
const PORT = process.env.BASE_URL || 4000;

app.use(cors());
app.use(express.json());


app.use('/api/tasks',taskRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
