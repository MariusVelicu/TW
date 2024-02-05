// taskform.js

import { useState, useEffect } from 'react';
import store from '../stores/TaskStore';

function TaskForm(props) {
  const { item, onUpdate, onCancel } = props;
  const [description, setDescription] = useState(item.description);
  const [priority, setPriority] = useState(item.priority);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({
      ...item,
      description,
      priority,
    });
  };

  const handleCancel = () => {
    onCancel();
  };

  useEffect(() => {
    setDescription(item.description);
    setPriority(item.priority);
  }, [item]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="priority">Priority</label>
        <input
          type="text"
          id="priority"
          name="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
