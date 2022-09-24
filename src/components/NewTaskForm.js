
import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({ text: '', category: categories[1] })

  const handleTextInput = ({ target: { value } }) => {
    setNewTask(prv => ({
      ...prv,
      text: value,
    }))
  }

  const handleSelectCategory = ({ target: { selectedIndex } }) => {
    setNewTask(prv => ({
      ...prv,
      category: categories.slice(1)[selectedIndex]
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit(newTask)
  }


  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask.text} onChange={handleTextInput} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleSelectCategory}>
          {categories.map(ctg => {
            if (ctg === 'All') {
              return null;
            }

            return <option key={ctg}>{ctg}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
