import React, { useState } from "react";

function NewTaskForm({categories, handleSubmit}) {
  const [text, setText] = useState('')
  const newCategories = [...categories]
  if(newCategories[0] === 'All')
    newCategories.shift()

  return (
    <form className="new-task-form" onSubmit={(e) => (handleSubmit(e), setText(''))}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category">
          {newCategories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
