import logo from './logo.svg';
import './App.css';
import react , {useEffect, useState} from 'react';
import axios from "axios";
import Creat from './component/Creat';
import Get from './component/Get';


function App() {
  
  return (
   
    <div className="name">
      <Creat></Creat>  
    <Get></Get>
    </div> 
  );
}

export default App;
