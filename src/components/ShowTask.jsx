import { useState } from "react";

const ToDo = () => {
  const [taskList, setTaskList] = useState([]);
  const [inputTask, setInputTask] = useState("");

    // ✅ HANDLE SUBMIT
  function handleSubmit(e) {
    e.preventDefault();
    if (inputTask.trim() === '') return;
    console.log("Submitted Value:", inputTask);

    const newTask = {
      id: new Date().getTime(),
      taskName: inputTask,
      isCompleted: false,
    }
    setTaskList([...taskList, newTask])
    // setTaskList((prev) => [...prev, newTask]);   Both line Works.
    console.log(taskList)
    setInputTask('')
  }

  // ✅ HANDLE DELETE
  function handleDelete(idToDelete) {
    const updatedList = taskList.filter((task) => task.id !== idToDelete);
    setTaskList(updatedList);
  }

  // ✅ HANDLE RESET
  function handleReset() {
    setTaskList([]);
  }

    // ✅ HANDLE Completion Status
  function handleEdit(idToEdit) {
    const updatedList = taskList.map((task) => {
      if (task.id === idToEdit) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTaskList(updatedList);
    
  }

  return (
    <div>
      <h2>To Do App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button type="submit">Add</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      {
        taskList.map((item) => (
          <li key={item.id}>
            <span style={{textDecoration : item.isCompleted ? 'line-through':'none'}}> 
              {item.taskName} 
              </span>
            <button type="button"onClick={() => handleDelete(item.id)}>Delete</button>
            <input type="checkbox" checked={item.isCompleted} 
            onChange={() => handleEdit(item.id)}/>
          </li>
        ))
      }
    </div>
  );
};

export default ToDo;
