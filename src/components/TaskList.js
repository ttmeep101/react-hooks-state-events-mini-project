import React, { useState } from "react";
import Task from './Task'

function TaskList({tasks, filter, setRefresh, refresh, setTasks}) {

  function handleDelete(taskToDelete) {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete)
    setTasks(updatedTasks)
  }

  const filteredTasks = tasks.filter((task) => filter === 'All' ? true : task.category === filter)

  return (
    <div className="tasks">
      {filteredTasks.map((task, index) => (
        <Task
          key = {index}
          task = {task}
          handleDelete = {() => handleDelete(task)}
        />
      ))}
    </div>
  );
}

export default TaskList;
