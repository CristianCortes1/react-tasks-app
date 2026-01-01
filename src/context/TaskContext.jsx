import { createContext, useContext, useState } from "react";
import { tasks as data } from "../data/tasks";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(data);

  const createTask = (task) => {
    const newTask = {
      id: tasks.length + 1,
      ...task,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (idToDelete) => {
    setTasks(tasks.filter((task) => task.id !== idToDelete));
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
