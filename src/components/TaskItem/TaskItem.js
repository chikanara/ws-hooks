import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task, deleteTask, inverseTask }) => {
  return (
    <div className="task">
      <p className={task.isDone ? "done" : ""}>{task.todo}</p>
      <div>
        <button onClick={() => inverseTask(task.id)}>complete</button>
        <button onClick={() => deleteTask(task.id)}>delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
