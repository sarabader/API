import axios from 'axios'
import React, {useEffect, useState } from 'react'

 function Get(){
    const [state, setState]=useState([])

    useEffect (() =>{
    // axios.get("https://rickandmortyapi.com/api/character").then((res) => {
    // console.log(res.data.results);
    // setState(res.data.results)
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
     console.log(res.data.results);
    setState(res.data.results)
      
      })
    
    },[])
      return (
       
        <div >
    
    
           {state.map(items=>{
      return(
        <div className='' >
        <p>Image Name:{items.name}</p>
        <img src= {items.image}></img>
    
        </div>
      )
    })}
    
    {/* {state.map(items=>{
      return(
        <div className='bor' >
        <p>Image Name:{items.name}</p>
        <img src= {items.image}></img>
        </div>
      )
    })}   */}
    
        </div>
      );
    }
 

 export default Get