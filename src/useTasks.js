import { useEffect, useState } from "react";

const getInitialTasks = () => {
    const tasksfromLocalStorage = localStorage.getItem("tasks");

    return tasksfromLocalStorage
    ? JSON.parse(tasksfromLocalStorage)
    : []
};

export const useTasks = () => {
    const [tasks, setTasks] = useState(getInitialTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);
    
      const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
      };
    
      const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
          if (task.id === id) {
            return { ...task, done: !task.done };
          }
    
          return task;
        }));
      };
    
      const setAllDone = () => {
        setTasks(task => tasks.map(task => ({
          ...task,
          done: true,
        })));
      };
    
      const addNewTask = (content) => {
        setTasks(tasks => [
          ...tasks,
          {
            content,
            done: false,
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
          }
        ]);
    }

    return {
        tasks,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask,
    }
};