import React from "react";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ taskList, deleteTask, inverseTask }) => {
  return (
    <div>
      {taskList.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          deleteTask={deleteTask}
          inverseTask={inverseTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
