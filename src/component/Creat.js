import axios from 'axios'
import React, { useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom';
import { form } from '@chakra-ui/react'



localStorage.setItem("Email","Sara@gmail.com")
alert(localStorage.getItem('email'))
 function Creat() {
  const navigate =useNavigate();
    const[fName,setFname]=useState()
    const[lName,setlname]=useState()
    const[email,setEmail]=useState()
    const[password,setpassword]=useState()
    function handleSubmit(e){
e.preventDefailt();
navigate("/Get")

    }

  

let url="https://6362426866f75177ea2a9c61.mockapi.io/todolist"
const postData=()=>{
    axios.post(url, {
        fName,
        lName,
        email,
        password
    }).then(res=>{
        console.log(res);
    })
}
// const login=()=>{
//   Navigate("/Get")
// }

  return (
    <form onSubmit={handleSubmit}>
        <input placeholder='fName' onChange={e=> {setFname(e.target.value)}}></input>
        <input placeholder='lName' onChange={e=> {setlname(e.target.value)}}></input>
        <input placeholder='Email' onChange={e=> {setEmail(e.target.value)}}></input>
        <input placeholder='Password' onChange={e=> {setpassword(e.target.value)}}></input>
        <button onClick={() => {
          postData();
        }}> post </button>

</form>
  )
}

export default Creat