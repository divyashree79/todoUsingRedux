import { addListener } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import Addform from "./AddForm"
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo(){
    const todos=useSelector((state)=>state.todos);
    console.log(todos);

    const dispatch=useDispatch();

    const clickHandler=(id)=>{
        console.log("delete",id);
        dispatch(deleteTodo(id));
    }
    const markHandler=(id)=>{
        dispatch(markAsDone(id));
    }
    
    return(
        <>
        <Addform/>
        <h2>Todo List App</h2>

        <ul>
            {todos.map((todo)=>(
                <li key={todo.id} >{todo.task}
                <button onClick={()=>clickHandler(todo.id)}>Delete</button>
                <input onClick={()=>markHandler(todo.id)} type="checkbox" />
                </li>
                ))}
        </ul>
        </>
    );
}