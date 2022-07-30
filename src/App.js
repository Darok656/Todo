import React from "react";
import { TodoCounter } from './componentes/TodoCounter'
import { TodoSearch } from "./componentes/TodoSearch";
import { CreateTodoButton } from "./componentes/CreateTodoButton";
import { TodoList } from "./componentes/TodoList";
import { TodoItem } from "./componentes/TodoItem";
//import './App.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';

const defaultTareas = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'Otra cosa 1', completed: true }
]

function App() {

  const [todos, setTodos] = React.useState(defaultTareas);
  const [serchValue, setSerchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!serchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = serchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <br />
      <div className="container">

        <MDBCard>
          <MDBCardImage src='https://geekflare.com/wp-content/uploads/2022/02/to-do-list.png' position='top' alt='...' />
          <MDBCardBody>
            <MDBCardTitle>
              <TodoCounter 
              total={totalTodos} 
              completed={completedTodos}/>
            </MDBCardTitle>
            <MDBCardText>
              <TodoSearch 
              serchValue={serchValue}
              setSerchValue={setSerchValue}/>
              <hr />
              <TodoList>
                {searchedTodos.map(tarea => (
                  <TodoItem 
                  key={tarea.text} 
                  text={tarea.text} 
                  completed={tarea.completed}
                  onComplete={() => completeTodo(tarea.text)}
                  onDelete={() => deleteTodo(tarea.text)}/>
                ))}
              </TodoList>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <br />

      </div>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
