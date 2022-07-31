import React from 'react'
import {
    MDBCard,
    MDBCardHeader,
    MDBCardImage
  } from 'mdb-react-ui-kit';

export const TodosEmty = () => {
  return (
    <MDBCard>
        <MDBCardHeader><h2>¿Cual sera tu primer To Do?</h2></MDBCardHeader>
      <MDBCardImage src='https://ouch-cdn2.icons8.com/exbKaYRy4-N1oWDFhJadVyV2Sbq5nkcOWYvWHN_IeRg/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTYz/LzFjN2Q1NmE2LThk/MTQtNDhjNC1hMzBj/LWVhODI4YWQ1NzE1/OC5zdmc.png' alt='...' position='top' />
    </MDBCard>
  )
}
