import { useState, useEffect } from 'react'

function EmployeeForm({ onAdd }) {
  // TODO

  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [salary, setSalary] = useState('');
  
  const isValid = !isNaN(salary) && salary >= 1000;

  const handleAdd = () => {
    if (!name || !job || !salary) {
      // Adaugă o înregistrare vidă dacă formularul nu este completat
      onAdd({});
      return;
    }
    onAdd({ name, job, salary });
    // Resetare valorilor după adăugare
    setName('');
    setJob('');
    setSalary('');
  };

  
  return (
    <div>
      <input type='text' placeholder='name' onChange={(evt) => setName(evt.target.value)} />
      <input type='text' placeholder='job' onChange={(evt) => setJob(evt.target.value)} />
      <input type='text' placeholder='salary' onChange={(evt) => setSalary(evt.target.value)} />
      <input type='button' value='add' onClick={() => onAdd({name, job, salary})} disabled={!isValid} />
    </div>
  )
}

export default EmployeeForm