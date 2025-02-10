import React, { useState,useRef } from 'react'
import {ToastContainer,toast} from 'react-toastify'

function Contact() {
  const formRef= useRef()
  const[data,setData]=useState({
    Fname:"",
    Email:"",
    Message:""
  })
  const handleChange=(e)=>{
      const {name,value}=e.target;
      setData({...data,[name]:value})
      console.log(data)
  }
  const handleSubmit= async(e)=>{
       e.preventDefault();
       if(setData.Message){
        toast.success("Message sent it successfully...")
       }
       setData({Fname:"" ,email:"", Message:""})
       formRef.current.reset();
       const formData = new FormData(e.target);

    formData.append("access_key", "aa1f0a0f-0cda-464a-a1bf-3619356ba602");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully")
    }
  }
  const resetData=()=>{
     setData.Fname="",
     setData.Email="",
     setData.Message=""
  }
  return (
    <div className='container mx-auto p-4'>
           <div className="w-full md:w-1/2 lg:w-2/3 mx-auto mb-4"> 
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.24573708342456!2d79.9417827962868!3d23.17268935707321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847f12a0d55141%3A0xa6208334386e35e2!2sSatna%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1739087799165!5m2!1sen!2sin"
          width="100%" 
          height="450"
          style={{ allowFullScreen: "", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }}
          className="rounded-lg shadow-md" 
        ></iframe>
      </div>
         <form className='bg-white shadow-2xl rounded-lg p-6 md:p-8' ref={formRef} onSubmit={handleSubmit}>
          <fieldset>
            <legend className='text-2xl text-center underline'>Contact us</legend>
            <label htmlFor='Fname' className='flex flex-col font-bold'>Name:</label>
            <input type='text' placeholder='Enter Your Full Name' name='Fname' id='Fname' onChange={handleChange} value={setData.Fname} className='w-full border-2 p-2'/>
            <label htmlFor='Email' className='font-bold'>Email:</label>
            <input type='Email' placeholder='Enter Your Email' name='Email' id='Email' onChange={handleChange} value={setData.Email} className='w-full border-2 p-2'/>
            <label htmlFor='Message' className='font-bold'>Your Message:</label>
            <textarea cols={10} rows={8} placeholder='Enter Your Message' name='Message' id='Message' onChange={handleChange} value={setData.Message} className='w-full border-2 p-2'/>
            <button type='submit' onClick={handleSubmit} className='p-2 bg-violet-600 border-black rounded-2xl items-center align-middle m-2 justify-center hover:bg-violet-950 text-white'>Send</button>
            <button type='submit'  onClick={resetData} className='p-2 bg-violet-600 border-black rounded-2xl items-center align-middle m-2 justify-center hover:bg-violet-950 text-white'>Reset</button>
          </fieldset>
         </form>
         <ToastContainer/>
    </div>
  )
}

export default Contact
