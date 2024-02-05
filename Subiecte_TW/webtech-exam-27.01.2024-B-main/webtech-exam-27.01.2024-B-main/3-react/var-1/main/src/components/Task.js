import { useState } from 'react'

function Task (props) {
  // TODO
  const { name, priority, done, id, toggleDone } = props;

  return (
    <div style={{ backgroundColor: priority === 'low' && !done ? 'lightgreen' : 'inherit' }}>
      {name} {done ? 'done' : 'not done'}{' '}
      <button onClick={() => toggleDone(id)}>toggle</button>
    </div>
  );
};

export default Task
