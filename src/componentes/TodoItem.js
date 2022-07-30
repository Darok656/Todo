import React from 'react'
import { MDBCard, MDBIcon, MDBRow, MDBCol, MDBCardBody, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import './Styles/TodoItem.css'

export const TodoItem = (props) => {

  return (

    <MDBCard className='marg' border='info' background='white'>
      <MDBRow className='g-0'>
        <MDBCol sm='1' className='d-flex justify-content-center align-items-center'>

          <MDBBtn tag='a' color='none'
           className={`Ico m-1 ${props.completed && 'active'}`}
           onClick={props.onComplete}>
            <MDBIcon fas icon="check" />
          </MDBBtn>

        </MDBCol>

        <MDBCol sm='9'>

          <MDBCardBody>
            <MDBCardText>
              <span className={`Text ${props.completed && 'cumple'}`}>
                {props.text}
              </span>
            </MDBCardText>
          </MDBCardBody>

        </MDBCol>

        <MDBCol sm='2' className='d-flex justify-content-center align-items-center'>

          <MDBBtn className='mx-2' tag='a' color='danger'
           outline floating
           onClick={props.onDelete}>
            <MDBIcon fas icon="times" />
          </MDBBtn>

        </MDBCol>

      </MDBRow>
    </MDBCard>
  )
}
