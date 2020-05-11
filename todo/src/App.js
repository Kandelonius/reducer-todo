import React from 'react';
import logo from './logo.svg';
import TodoForm from "./components/TodoForm";
import './App.css';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TodoForm />
    </div>
  );
}

export default App;
