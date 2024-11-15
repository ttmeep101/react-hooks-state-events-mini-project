import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedIndex, setSelected] = useState(null)
  const [filter, setFilter] = useState('All')
  const [refresh, setRefresh] = useState(false)
  const [tasks, setTasks] = useState(TASKS)

  function handleCategory(e, index) {
    setSelected(index)
    setFilter(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newObj = {
      text: e.target.text.value,
      category: e.target.category.value
    }
    tasks.push(newObj)
    setRefresh(!refresh)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      {CATEGORIES.map((category, index) => (
        <CategoryFilter
          key = {index}
          category = {category}
          handleCategory = {(e) => handleCategory(e, index)}
          isSelected = {index === selectedIndex}
        />
      ))}
      <NewTaskForm 
        categories = {CATEGORIES}
        handleSubmit = {handleSubmit}
      />
      <TaskList 
        tasks = {tasks}
        filter = {filter}
        setRefresh = {setRefresh}
        refresh = {refresh}
        setTasks = {setTasks}
      />
    </div>
  );
}

export default App;
