import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { TASKS, CATEGORIES } from "../data";


function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [curCat, setCurCat] = useState(CATEGORIES[0])

  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const taskListProps = {
    tasks: TASKS,
    taskList: tasks,
    curCat,
    setTasks,
  }

  const categoryFilterProps = {
    categories: CATEGORIES,
    curCat,
    setCurCat
  }

  const taskFormProps = {
    categories: CATEGORIES,
    onTaskFormSubmit,
    setTasks
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  {...categoryFilterProps} />
      <NewTaskForm {...taskFormProps} />
      <TaskList {...taskListProps} />
    </div>
  );
}

export default App;
