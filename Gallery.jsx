import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import data from './coffe.json'
import Aos from "aos";
import 'aos/dist/aos.css'
import {addToCart} from '../redux/slice'
import {useDispatch} from 'react-redux'
import { toast } from "react-toastify";


function Gallery() {
  const[added,setAdded]=useState(false)
  const dispatch = useDispatch();
  useEffect(()=>{
    Aos.init({
      offset:200,
      duration:900,
      easing :'ease-in-out-sine',
      delay:100
    })
  })
 
  return (
    <div>
      <div className=" text-white">
        <motion.h1
          className="text-black underline text-center m-2"
          style={{ fontStyle: "italic" }}
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, color: "#FFD700" }}
        >
          Welcome To Coffee Shop
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1, }}
          className=" text-center p-2 text-white"
        >
          Coffee. That magical elixir that kickstarts mornings and fuels
          afternoons. It's more than just a drink; it's a ritual, a comfort, a
          friend. Whether you prefer it strong and black, sweet and creamy, or
          iced and refreshing, coffee offers a little moment of peace in a busy
          day. It's the perfect companion for a good book, a stimulating
          conversation, or simply a quiet moment to yourself. In short, coffee
          is a small but powerful part of what makes life enjoyable
        </motion.p>
      </div>
      <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border-2 rounded-2xl shadow-2xl">
          <img  src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR1B3hNAhSv_p0HjjMaHxuYGEvwIbvAAw6ce3HG2fdYSU1pGqvLTHw9NyJBsmjKSlRfl4FvRtpyGl7bsKDqJQ38vMEYt7HrPujEROShoWi0M9AQL1qiucKk" className="size-96 p-2"></img>
          <h2 className="font-bold text-center text-2xl">Espresso</h2>
          
        </div>
        <div data-aos="fade-right" className="border-2 rounded-2xl shadow-2xl">
          <img src="https://www.amashaamasala.com/wp-content/uploads/2024/06/coffee_its_benefits_898_1_.jpg" className="size-96 p-2 space-x-4"></img>
          <h2 className="font-bold text-center text-2xl">Cappuccino</h2>
        </div>
        <div data-aos="fade-right" className="border-2 rounded-2xl shadow-2xl">
          <img src="https://cdn7.kiwilimon.com/recetaimagen/36986/640x640/46349.jpg.jpg" className="size-96 p-2"></img>
          <h2 className="font-bold text-center text-2xl">Cafe Latte</h2>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-around p-2">
           <div data-aos="flip-left" className="  shadow-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border-2 m-0">
               {
                data.map((value)=>{

                    return (
                      <div key={value.id} className="">
                         <motion.img   whileHover={{ scale: 0.9 }} data-aos="zoom-in-up" src={value.image} alt="image" className="size-60 rounded-2xl shadow"/>
                         <h4 className="p-0 m-0 text-white">Title:{value.title}</h4>
                         <p className="  text-black p-0 m-0">Description{value.description}</p>
                         <p className=" font-bold text-black p-0">Price:{value.price}</p>
                         <button className="bg-green-500 p-1 rounded-2xl hover:bg-green-900 align-middle px-10" onClick={()=>dispatch(addToCart(value))}>Add to cart</button>
                        </div>
                    )
                })
               }
           </div>
      </div>
    </div>
  );
}

export default Gallery;
