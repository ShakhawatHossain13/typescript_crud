import React , {useState}from "react"
import TodoList from "./TodoList";
import InputField from "./InputField";
import { Todo } from "../../model"; 
 
const TodoApp:React.FC  =()=>{
    const [todo, setTodo] = useState<string>("");
    const[todos, setTodos] = useState<Todo[]>([]);
    const handleAdd =(e: React.FormEvent)=>{
        e.preventDefault();
        if(todo){        
            setTodos((prev =>
               [...prev, {id : Date.now(), todo, isDone: false}]))
            setTodo("");
        }
    } 
    return(
        <React.Fragment>
            <div className='container'>   
                <h1>Task</h1>
                <InputField todo = {todo} setTodo = {setTodo} handleAdd={handleAdd}/>
                <TodoList todos={todos} setTodos={setTodos} />
            </div>   
        </React.Fragment>
    )
}

export default TodoApp;