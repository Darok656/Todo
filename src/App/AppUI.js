import React from 'react'

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage
} from 'mdb-react-ui-kit';

import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../componentes/TodoCounter'
import { TodoSearch } from "../componentes/TodoSearch";
import { CreateTodoButton } from "../componentes/CreateTodoButton";
import { TodoList } from "../componentes/TodoList";
import { TodoItem } from "../componentes/TodoItem";
import { Modal } from '../Modal';
import { TodoForm } from '../componentes/TodoForm'
import { TodosError } from '../componentes/TodosError';
import { TodosLoading } from '../componentes/TodosLoading';
import { TodosEmty } from '../componentes/TodosEmty';


export const AppUI = () => {

    const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <br />
            <div className="container">

                <MDBCard>
                    <MDBCardImage src='https://geekflare.com/wp-content/uploads/2022/02/to-do-list.png' position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>
                            <TodoCounter />
                        </MDBCardTitle>
                        <MDBCardText>
                            <TodoSearch />
                            <hr />

                            <TodoList>
                                {error && <TodosError error={error} />}
                                {loading && <TodosLoading/>}
                                {(!loading && !searchedTodos.length) && <TodosEmty/>}

                                {searchedTodos.map(tarea => (
                                    <TodoItem
                                        key={tarea.text}
                                        text={tarea.text}
                                        completed={tarea.completed}
                                        onComplete={() => completeTodo(tarea.text)}
                                        onDelete={() => deleteTodo(tarea.text)} />
                                ))}
                            </TodoList>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
                <br />
            </div>

            {!!openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}

            <CreateTodoButton 
            setOpenModal={setOpenModal}/>
        </React.Fragment>
    )
}
