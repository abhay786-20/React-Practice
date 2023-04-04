import React, { useEffect ,useState} from 'react';

import { BrowserRouter,Routes,Route, Link,Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Page404 from './components/Page404';
import Userr from './components/Userr';
import Filter from './components/Filter';
import Login from './components/Login';
import Protected from './components/Protected';
function App() {


  
return (
    <div className="App">
    <h1> Routes </h1>
   <BrowserRouter>
    <NavBar/>
        <Routes>
          <Route path = "/" element = {<Protected Component = {Home}/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/user/:name" element = {<Userr/>}/>
          <Route path = "/filter" element ={<Filter/>}/>
          <Route path ="/*" element = {<Navigate to = "/"/>}></Route>
        </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
