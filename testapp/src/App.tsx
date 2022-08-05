import React, {useState} from 'react';
import './App.css'; 
import TodoApp from './components/TodoApp'; 
import GridDesign from './components/GridDesign';

const App: React.FC=()=> { 
  return (
    <React.Fragment>
      <TodoApp/>
      <GridDesign/>
    </React.Fragment>    
  );
}

export default App;
