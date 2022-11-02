import logo from './logo.svg';
import './App.css';
import react , {useEffect, useState} from 'react';
import axios from "axios";


function App() {
  const [state, setState]=useState([])

useEffect (() =>{
  axios.get("https://rickandmortyapi.com/api/character").then((res) => {
console.log(res.data.results);
setState(res.data.results)
  
  })

},[])
  return (
   
    <div className="name">
     
{state.map(items=>{
  return(
    <div className='bor' >
    <p>Image Name:{items.name}</p>
    <img src= {items.image}></img>
    </div>
  )
})}  
    </div>
  );
}

export default App;
