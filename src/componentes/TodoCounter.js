import React from 'react';
import './Styles/TodoCounter.css';

function TodoCounter({total, completed}) {
  return (
    <div className='tiru'>
      <h2> Proyecto React Platzi </h2>
      <h3> Has completado {completed} de {total} Tareas</h3>
      <hr />
    </div>

  );
}

export { TodoCounter };