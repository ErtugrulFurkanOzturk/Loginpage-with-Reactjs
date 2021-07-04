import React, { useState, useReducer } from 'react';
import './App.css';
import HookCounter from "./components/HookCounter";
import HookWriting from "./components/HookWriting";
import Login from "./components/Login";
import Wishlist from "./components/Wishlist";
import Posts from "./components/Posts";
import ACTIONS from "./actionTypes";
import Todo from "./components/Todo";

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.TODO_ADD:
      return [...todos, addnewtodo(action.payload.name)];
    case ACTIONS.TODO_COMPLETE:
      return todos.map(todo => {
        if(todo.id === action.id) {
          return{ ...todo, okey: !todo.okey}
        }
        return { ...todo }
      });
    case ACTIONS.TODO_DELETE:
    return todos.filter((todo) => todo.id !== action.id);

    default:
      return todos;
  }
};

const addnewtodo = name => {
  return { id: Date.now(), name, okey: false };
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
   const [name, setName] = useState("");

   const handleSubmit = (e) => {
     e.preventDefault();
     dispatch({ type: ACTIONS.TODO_ADD, payload: { name } });
     setName();
   };

    return(
      <div className="App">
         <HookCounter />
         <HookWriting text={'Hello I am Ertuğrul Furkan Öztürk!!'} max={10} />
         <Login />
         <Wishlist />

         <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
         </form>
         {todos.map(todo => (
           <Todo key={todo.id} todo={todo} dispatch={dispatch} />
         ))}

         <Posts />
      </div>
    );

}

export default App;
