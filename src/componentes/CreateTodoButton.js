import React from 'react'
import './Styles/CreateTodoButton.css'

export const CreateTodoButton = () => {

  const uncli = (msg) => {
    alert(msg)
  };

  return (
    <button 
    className='buttonpuls'
    onClick={() => uncli('aqui va un modal')}>
      +
      </button>
  )
}
