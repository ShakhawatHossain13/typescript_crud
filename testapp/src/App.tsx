import React, {useState} from 'react';
import './App.css';
import { ThemeProvider } from "@material-ui/core";
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import Home from './components/Home';
import theme from "./theme";  
import GridDesign from './components/GridDesign';
import { Todo } from './model';

const App: React.FC=()=> {
  const [todo, setTodo] = useState<string>("");
  const[todos, setTodos] = useState<Todo[]>([]);

  const handleAdd =(e: React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos(
          [...todos, {id : Date.now(), todo, isDone: false}]        
        );
      setTodo("");
    }
  } 

  return (
   <React.Fragment>
     <div className='container'>   
          <h1>Task</h1>
          <InputField todo = {todo} setTodo = {setTodo} handleAdd={handleAdd}/>
          <TodoList todos={todos} setTodos={setTodos} />
       </div>
        <ThemeProvider theme={theme}> 
          <Home /> 
          <GridDesign/> 
      </ThemeProvider>
   </React.Fragment>
  );
}

export default App;
