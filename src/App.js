import logo from './logo.svg';
import './App.css';
import react , {useEffect, useState} from 'react';
import axios from "axios";
import Creat from './component/Creat';
import Get from './component/Get';
import {Routes , Route} from 'react-router-dom';


function App() {
  

  return (
   
    <div className="name">
      <Routes>
      <Route path ='/' element={<Creat/>}> </Route>
      {/* <Route exact path ='Get' element={<Get/>}> </Route> */}
      </Routes>  
    </div> 
  );
}

export default App;
