// TODO

import React, { useState } from 'react';
import TaskList from './TaskList';

function App () {
  const initialTasks = [
    { id: 1, name: 'task 1', priority: 'low', done: false },
    { id: 2, name: 'task 2', priority: 'high', done: false },
    // adaugă altele după necesități
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const toggleDone = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div>
      <h1>A list of tasks</h1>
      <TaskList tasks={tasks} toggleDone={toggleDone} />
    </div>
  );
}

export default App
