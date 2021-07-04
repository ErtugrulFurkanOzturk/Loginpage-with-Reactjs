import React from "react";
import { ACTIONS } from "../actionTypes";


const Todo = ({ todo, dispatch }) => {
  return(
    <div>
      <span style= {{ background: todo.okey ? "#438" : "#999" }}>{todo.name}</span>
      <button onClick={() => dispatch({ type: ACTIONS.TODO_COMPLETE, id: todo.id })}>Complete</button>
      <button onClick={() => dispatch({ type: ACTIONS.TODO_DELETE, id:todo.id })}>Delete</button>
    </div>
  );
};


export default Todo;
