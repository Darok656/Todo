import React from 'react'
import { MDBListGroup } from 'mdb-react-ui-kit';


export const TodoList = (props) => {
  return (

    <MDBListGroup>
      {props.children}
    </MDBListGroup>

  )
}
