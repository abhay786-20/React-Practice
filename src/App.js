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
import Api from './Api';
import { Common } from './components/contextApi/Common';
import Cuse from './components/contextApi/Cuse';
function App() {

  const[data,setData] = useState(0);

  function handle (){
    setData(10+data);
    console.log(data)
  }

return (
   <Common.Provider value = {{handle,data}}>
    
    <button onClick={handle}>Hello Context Api</button>
    
    <Cuse/>

   </Common.Provider>

    
  );
}

export default App;

  //  {/*  <h1> Routes </h1>
  //  <BrowserRouter>
  //   <NavBar/>
  //       <Routes>
  //         <Route path = "/" element = {<Protected Component = {Home}/>}/>
  //         <Route path = "/login" element = {<Login/>}/>
  //         <Route path = "/about" element = {<About/>}/>
  //         <Route path = "/user/:name" element = {<Userr/>}/>
  //         <Route path = "/filter" element ={<Filter/>}/>
  //         <Route path ="/*" element = {<Navigate to = "/"/>}></Route>
  //       </Routes>
  //   </BrowserRouter>
  //    */}
  //    {/* {
  //    <Api/>} */}