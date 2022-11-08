import './App.css';
import React from 'react';
import Home from './Home';
import Grades from './Grades';
import Login from './Login';
import NavBar from './NavBar';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Grades" element={<Grades />}/>
        <Route path="/Login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
