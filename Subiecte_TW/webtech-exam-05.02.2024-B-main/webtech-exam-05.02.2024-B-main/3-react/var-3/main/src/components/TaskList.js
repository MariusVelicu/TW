// tasklist.js

import { useState, useEffect } from 'react';
import store from '../stores/TaskStore';
import Task from './Task';
import TaskForm from './TaskForm';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setTasks(store.getItems());
    store.emitter.addEventListener('UPDATE', () => {
      setTasks([...store.getItems()]);
    });
  }, []);

  const handleUpdateTask = (updatedTask) => {
    store.updateItem(updatedTask);
    setSelected(null);
  };

  const handleCancel = () => {
    setSelected(null);
  };

  return (
    <div>
      <div>
        {tasks.map((e) => (
          <div key={e.id}>
            <Task item={e} onSelect={() => setSelected(e)} />
            {selected && selected.id === e.id && (
              <TaskForm
                item={selected}
                onUpdate={handleUpdateTask}
                onCancel={handleCancel}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
