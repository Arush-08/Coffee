import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


function Login() {
  const formRef= useRef();
  const[data,setData]=useState({
    email:"",
    password:""
  })
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setData({email:"", password:""})
    formRef.current.reset();

    const url="http://localhost:5000/api/auth/login"
    const respose= await fetch(url,{
      method:"POST",
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
    const result= await respose.json();
    console.log(result)
  }
  const handleChange=(e)=>{
     const {name,value}=e.target;
     setData({...data,[name]:value});
  }
  console.log(data)
  return (
    <div className='container mx-auto p-4'>
      <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-32'>
        <div>
          <motion.img src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?semt=ais_hybrid' className='w-64 md:w-96 mx-auto md:mx-0'
           initial={{x:0}}
           animate={{x:50}}
           transition={{duration:1,delay:0.4,ease:"easeOut"}}
           ></motion.img>
        </div>
        <div className='w-full md:w-auto'>
         <motion.form onSubmit={handleSubmit} ref={formRef} className='bg-white p-4 shadow-2xl rounded-lg w-full max-w-sm mb-2' initial={{x:0}}
           animate={{y:10}}
           transition={{duration:1,delay:0.4,ease:"easeOut"}}>
           <h1 className='text-2xl font-semibold text-center text-gray-800 mb-4'>Login Form</h1>
           <label htmlFor='email'  className='flex flex-col text-2xl text-black'>Email</label>
         <input type='text' placeholder='Enter your email' id='email' name='email' onChange={handleChange} value={setData.email} className='w-full px-3 py-2 border rounded-md text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500' style={{fontStyle:"italic"}} />

           <label htmlFor='password'>Password</label>
           <input type='password' placeholder='Enter your password' id='password' name='password' onChange={handleChange} value={setData.password} className='w-full px-3 py-2 border rounded-md text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500' style={{fontStyle:"italic"}}
           />
           <button type='submit' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 w-full'>Login</button>
           <span>Don't Have an account ?</span><Link to='/signup' className='text-blue-500 hover:underline'>SignUp</Link>
         </motion.form>
        </div>
      </div>

    </div>
  )
}

export default Login
