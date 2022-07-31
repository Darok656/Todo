import React from 'react'
import './CreateTodoButton.css'

export const CreateTodoButton = (props) => {

  const uncli = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button 
    className='buttonpuls'
    onClick={ uncli }>
      +
      </button>
  )
}
