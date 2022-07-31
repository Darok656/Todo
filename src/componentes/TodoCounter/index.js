import React from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos} = React.useContext(TodoContext);
  return (
    <div className='tiru'>
      <h2> Proyecto React Platzi </h2>
      <h3> Has completado {completedTodos} de {totalTodos} Tareas</h3>
      <hr />
    </div>

  );
}

export { TodoCounter };