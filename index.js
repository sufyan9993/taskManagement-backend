import express from 'express'
import  cors from 'cors'
import taskRouter from './router/taskRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use('/api/tasks',taskRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});