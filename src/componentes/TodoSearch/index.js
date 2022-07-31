import React from 'react'
import {
  MDBInputGroup,
  MDBIcon
} from 'mdb-react-ui-kit';
import { TodoContext } from '../../TodoContext';

export const TodoSearch = () => {

  const {serchValue, setSerchValue} = React.useContext(TodoContext)

  const onSearchChange = (event) => {
    console.log(event.target.value);
    setSerchValue(event.target.value);
  }

  return (
    <MDBInputGroup noWrap textBefore={<MDBIcon fas icon='search' />} className='container'>
      <input className='form-control' type='text' placeholder='Search'
      value={serchValue}
      onChange={onSearchChange} />
    </MDBInputGroup>
   
  )
}

