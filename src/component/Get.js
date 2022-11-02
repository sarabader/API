import axios from 'axios'
import React, {useEffect, useState } from 'react'

 function Get(){
    const [state, setState]=useState([])

    useEffect (() =>{
    // axios.get("https://rickandmortyapi.com/api/character").then((res) => {
    // console.log(res.data.results);
    // setState(res.data.results)
    axios.get("https://6362426866f75177ea2a9c61.mockapi.io/todolist").then((res) => {
     console.log(res.data);
    setState(res.data)
      
      })
    
    },[])
      return (
       
        <div >
    
    
           {state.map(items=>{
      return(
        <div className='bor' >
        <p>ID:{items.id}</p>
        <p> First Name:{items.fName}</p>
        <p> Last Name:{items.lName}</p>
        <p> Email:{items.email}</p>
        <p> Password:{items.password}</p>
    
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