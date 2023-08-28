let tasks = []


// get all tasks data 
export const getTasks = (req, res) => {
    res.json(tasks);
}
// get a single task details
export const getTaskByID = (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find((t) => t._id === taskId);
    res.json(task)
}

// add a new task
export const addTask = (req, res) => {
    
    const newTask = { _id: Date.now(), ...req.body, completed: false };
    tasks.push(newTask);
    res.json(newTask);
}

// update task by id
export const updateTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskdetails = tasks.find(task => task._id === taskId);
    if (taskdetails) {
        const index = tasks.findIndex(task => task._id === taskId);
        tasks.splice(index, 1, { ...taskdetails, ...req.body });
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
}

// delete task by ID
export const deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter((task => task._id !== taskId))
    res.sendStatus(204);
}
