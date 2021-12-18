import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [taskList, setTaskList] = useState([
    { id: 0, todo: "Learn html and css", isDone: true },
    { id: 1, todo: "Learn JS", isDone: true },
    { id: 2, todo: "Learn React", isDone: false },
    { id: 3, todo: "Learn Redux", isDone: false },
  ]);
  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  const addTask = (todo) => {
    if (todo !== "") {
      setTaskList([
        ...taskList,
        { id: Math.random(), todo: todo, isDone: false },
      ]);
    } else alert("Enter new task");
  };
  const inverseTask = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };
  return (
    <div className="app">
      <h1>Todo App</h1>
      <AddTask addTask={addTask} />
      <TaskList taskList={taskList} deleteTask={deleteTask} inverseTask={inverseTask} />
    </div>
  );
}

export default App;
