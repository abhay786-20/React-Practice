import React, { useEffect ,useState} from 'react';

import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Page404 from './components/Page404';



function App() {


  
return (
    <div className=" App">
    <h1> Routes </h1>
    <BrowserRouter>
    <NavBar/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/*" element ={<Page404/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
