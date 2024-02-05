import React from 'react'

import { useState } from "react";

const AddDevice = (props) => {
  const { onAdd } = props;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleAdd = () => {
    onAdd({ name, price });
    setName("");
    setPrice(0);
  };

  return (
    <div>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAdd}>Submit</button>
    </div>
  );
};

export default AddDevice;