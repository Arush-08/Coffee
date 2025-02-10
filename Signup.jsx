import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import {toast,ToastContainer} from 'react-toastify'
import { motion } from 'framer-motion';

function Signup() {
  const[data,setData]=useState({
    Uname:"",
    email:"",
    password:"",
    phone:""
  })
  const formRef = useRef(null);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setData({...data,[name]:value})
   
  }
  console.log(data)
  const handleSubmit= async(e)=>{
   e.preventDefault();
   const {Uname,email,phone,password}= data;
   if(!Uname && !email && !phone && !password){
    toast.error("Fill all fields proper")
   }
   else
   {
    toast.success("Signup successfully")
   }
   setData({ name: "", email: "", password: "" });
   formRef.current.reset();
  

   

   try {
    const url="http://localhost:5000/api/auth/signup"
    const response= await fetch(url,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    })
    const result= await response.json();
    console.log(result)
  
    
   } catch (error) {
    console.log(error)
   }

  }
  return (
    <div>
      <div className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 p-4 m-4 z-20'>
      <div className='flex justify-center lg:justify-start'>
        <motion.img src='https://media.istockphoto.com/id/1429201424/vector/blog-social-media-platform-influencer-personal-brand-promotion-recent-stories-and-post.jpg?s=612x612&w=0&k=20&c=tROfrRi-btklIadu9ESPOon85w5xjAop_BybZIcO2Lc='
        initial={{x:0}}
        animate={{x:50}}
        transition={{duration:1,delay:0.4,ease:"easeOut"}}
        className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:size-[480px] lg:h-[450px]'/>
      </div>
      <div className='flex flex-col justify-between w-full max-w-md lg:max-w-lg'>
       
          <motion.form onSubmit={handleSubmit} ref={formRef} className='container shadow-2xl bg-white p-4 mt-4 w-full sm:w-80 md:w-96 lg:w-64'
          animate={{x:-10}}
          transition={{duration:1,delay:0.4,ease:"easeOut"}}>
            <h2 className='text-2xl  font-semibold text-center text-black'>SignUp Form</h2>
            <label htmlFor='uname' className='flex flex-col text-lg md:text-2xl text-black'>Name:</label>
            <input type='text' placeholder='enter your name' id='uname' name='uname' onChange={handleChange} value={setData.Uname}  required className='w-full text-black p-1.5 border-b-2 text-lg md:text-2xl' style={{fontStyle:"italic"}}/>
            <label htmlFor='email' className='flex flex-row text-2xl text-black'>Email:</label>
            <input type='email' placeholder='enter your email' id='email' name='email' onChange={handleChange} value={setData.email}  required className='w-full text-black p-1.5 border-b-2 text-2xl'  style={{fontStyle:"italic"}}/>

            <label htmlFor='phone' className='flex flex-row text-2xl text-black'>Phone:</label>
            <input type='number' placeholder='enter your number' id='phone' name='phone' onChange={handleChange} value={setData.phone}  required className='w-full text-black p-1.5 border-b-2 text-2xl'  style={{fontStyle:"italic"}}/>

            <label htmlFor='password'className='flex flex-row text-2xl text-black'>Password:</label>
            <input type='password' placeholder='enter your password' id='password' name='password' onChange={handleChange} value={setData.password} required className='w-full text-black p-1.5  text-2xl border-b-2'  style={{fontStyle:"italic"}}/>
            <div className='items-center'>
            <button type='submit' className='bg-green-500 p-2 rounded items-center m-2 hover:bg-green-700'>Submit</button>
            </div>
            <span>Already have an account ?</span><Link to="/login">Login</Link>
          </motion.form>
      </div>
      
      
          <ToastContainer/>
        </div>
    </div>
  )
}

export default Signup
