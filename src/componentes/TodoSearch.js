import React from 'react'
import {
  MDBInputGroup,
  MDBIcon
} from 'mdb-react-ui-kit';

export const TodoSearch = ({ serchValue, setSerchValue }) => {

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

