import React from 'react';
import {
    MDBTextArea,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBIcon
} from 'mdb-react-ui-kit';
import { TodoContext } from '../../TodoContext';

export const TodoForm = () => {

    const [newTodoValues , setNewTodoValues] = React.useState('');

    const {addTodo, setOpenModal} = React.useContext(TodoContext);
    
    const onChange = (event) => {
        setNewTodoValues(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(newTodoValues.length <= 0)return(
            alert("porfavor escribe alguna tarea")
        );
        addTodo(newTodoValues);
        setOpenModal(false)
    }

    return (
        <form onSubmit={onSubmit}>

            <MDBCard style={{ width: '350px'}}>
                <MDBCardHeader><h2>Nuevo To Do</h2></MDBCardHeader>
                <MDBCardBody>
                    <MDBCardText>
                        <MDBTextArea label='Escribe tu nuevo To Do' value={newTodoValues} onChange={onChange} rows={5} />
                    </MDBCardText>
                    <MDBRow>
                        <MDBCol sm='6'>
                            <MDBBtn rounded block className='mb-3' color='danger' type='button' onClick={onCancel}>
                                <MDBIcon fas icon="ban" /> Cerrar
                            </MDBBtn>
                        </MDBCol>
                        <MDBCol sm='6'>
                            <MDBBtn rounded block className='mb-3' color='success' type='submid'>
                                <MDBIcon fas icon="plus-circle" /> Añadir
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>




        </form>
    )
}
