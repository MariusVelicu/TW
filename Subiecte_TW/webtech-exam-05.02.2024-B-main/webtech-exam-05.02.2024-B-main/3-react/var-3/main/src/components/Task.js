// task.js

function Task(props) {
  const { item, onSelect } = props;

  return (
    <div>
      {item.description} {item.priority}
      <button onClick={() => onSelect(item)}>select</button>
    </div>
  );
}

export default Task;
