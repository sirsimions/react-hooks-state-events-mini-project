import React from "react";
import Task from "./Task";

function TaskList({ tasks, taskList, curCat, setTasks }) {

  const filteredTasks = taskList && taskList.filter(({ category }) => {
    return curCat === 'All'
      ? true
      : category === curCat
  })

  return (
    <div className="tasks">
      {taskList ? (
        filteredTasks.map(tsk => {
          const taskProps = { ...tsk, setTasks }

          return <Task key={tsk.text} {...taskProps} />
        })
      ) : (
        tasks.map((_, idx) => <div key={idx} className="task" />)
      )}
    </div>
  );
}

export default TaskList;
