import { Router } from "express";
import { addTask, deleteTask, getTaskByID, getTasks, updateTask } from "../controller/taskControl.js";
const taskRouter = Router();

// api for get all tasks data
taskRouter.get('/getTasks', getTasks);

// api for get task by id
taskRouter.get('/getTask/:id', getTaskByID);

// api for add a task
taskRouter.post('/addTask', addTask);

// api for update a task by id
taskRouter.put('/updateTask/:id', updateTask);

// api for delte a task by id
taskRouter.delete('/deleteTask/:id', deleteTask);


export default taskRouter