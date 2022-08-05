import React from "react"
import { Todo } from "../model";
import SingleTodo from "./SingleTodo"; 
import List from '@mui/material/List'; 

interface TodoListProps{
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<TodoListProps> =({todos, setTodos})=>{
    return(
        <React.Fragment>
            <div className="todos">
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', listStyleType: 'circle' }}> 
                    {todos.map((todo)=>(
                        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
                    ))} 
                </List> 
            </div> 
        </React.Fragment>
    )
}

export default TodoList;