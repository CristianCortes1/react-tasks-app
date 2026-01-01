import { tasks as data } from "../data/tasks";
import { useState } from "react";
import TaskCard from "./TaskCard";
function TaskList({ tasks }) {
  return (
    <div>
      TaskList
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          description={task.description}
        ></TaskCard>
      ))}
    </div>
  );
}

export default TaskList;
