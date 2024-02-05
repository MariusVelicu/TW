// task.js

import { useState } from 'react';

function Task(props) {
  const { item } = props;
  const [isEditable, setIsEditable] = useState(false);
  const [description, setDescription] = useState(item.description);
  const [priority, setPriority] = useState(item.priority);

  const handleSave = () => {
    // Implementați salvarea modificărilor aici
    setIsEditable(false);
  };

  return (
    <div>
      {isEditable ? (
        <div>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
          <button onClick={handleSave}>save</button>
          <button onClick={() => setIsEditable(false)}>cancel</button>
        </div>
      ) : (
        <div>
          {description} {priority}
          <button onClick={() => setIsEditable(true)}>select</button>
        </div>
      )}
    </div>
  );
}

export default Task;
