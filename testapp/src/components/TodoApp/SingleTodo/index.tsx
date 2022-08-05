import React, { useState } from "react" 
import { Todo } from "../../../model"; 
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'; 

type SingleTodoProps ={
    todo: Todo, 
    todos: Todo[],
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}
 
const SingleTodo:React.FC<SingleTodoProps> =({todo, todos, setTodos})=>{

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    
    const handleDone =(id:number)=>{
        setTodos((prev) =>        
            (prev.map((todo)=>
                todo.id === id ? {...todo, isDone: !todo.isDone}: todo
            ))
       )
    };

    const handleDelete = (id:number) =>{
        const newTodos = [...todos];
        const index = todos.findIndex((todo) => todo.id === id);
        newTodos.splice(index, 1);
        setTodos(newTodos)
    }

    const handleEdit =(e: React.FormEvent, id: number) =>{
        e.preventDefault();        
        setTodos((prev) =>        
        (prev.map((todo)=>
          (todo.id === id ? {...todo, todo:editTodo}:todo)
        ))
     )
        setEdit(false);       
    }
 
    return(
        <React.Fragment>
               <ListItem key={todo.id} >
                    <form className="todos__single" onSubmit={(e)=>handleEdit(e, todo.id) }>    
                            {
                                edit?(
                                    <input 
                                    type="text" 
                                    className="input__box" 
                                    value= {editTodo} 
                                    onChange={(e)=> setEditTodo(e.target.value)}
                                    />
                                ):(
                                    <ListItemText primary= {todo.todo} secondary=  {
                                        todo.isDone?(
                                            <span>Done</span>
                                        ):(
                                            <span>Assigned</span>
                                        )
                                    }/>
                                )
                            }           
                            <span 
                                onClick={()=> handleDone(todo.id)}
                                className="todos__single__button" 
                                 >
                                    Complete
                            </span> 
                            <span className="todos__single__button"  
                                onClick={()=>{
                                    if(!edit && !todo.isDone){
                                        setEdit(!edit)
                                    }}
                                }                             
                            >
                                Edit
                            </span>
                            <span className="todos__single__button"  
                                 onClick = {()=> handleDelete(todo.id)} >
                                Delete
                            </span>                          
                    </form>
            </ListItem>
        </React.Fragment>
    )
}

export default SingleTodo;