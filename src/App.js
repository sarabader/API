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
   
    <div className="App">
     
{state.map(items=>{
  return(
    <>
    <p>Image Name:{items.name}</p>
    <p>Image :{items.image}</p>
    </>
  )
})}  
    </div>
  );
}

export default App;
