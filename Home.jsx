import React, { useEffect,useState } from "react";
import Aos from "aos";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import About from "./About";
import Signup from "./Signup";
import ImageSlider from "./ImageSlider";


function Home() {
  const[data,setData]=useState()
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
 
  
  return (
    <div className="">
  
      <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-10 gap-10 shadow-2xl">
        <motion.p className="text-center md:text-left md:w-1/2" data-aos="zoom-in"
        animate={{x:[-50,20]}}
        transition={{duration:0.8,delay:0.2,ease:'easeOut'}}

        >
          <p className="font-bold text-black text-2xl md:text-4xl lg:text-5xl">Start Your Day With A</p><br></br>
          <span className="text-black font-bold text-1xl md:text-5xl lg:text-6xl pt-0">Fresh Coffee</span>
          <p className="sm:text-1xl right-9  md:text-1xl text-black mt-2">Coffee is a popular and beloved beverage enjoyed by people around the world</p>
          <button className="mt-6 bg-rose-400 px-6 py-3 text-black rounded-lg text-lg font-semibold transition-all hover:bg-rose-500"><Link to='/gallery' className="no-underline p-2">Shop Now</Link></button>
        </motion.p>

        <motion.img
          src="https://img.freepik.com/premium-vector/barista-serve-coffee-cup-vector-illustration_869472-414.jpg"
          className="w-full md:w-[500px] lg:w-[600px] object-contain size-96"
          initial={{x:0}}
          animate={{ x:[600,-5]}}
          transition={{ duration: 1, delay: 0.2,ease:"easeOut" }}
        ></motion.img>
     
      </div>
      <ImageSlider/>
    <div>
    <hr></hr>
    <About/>
    </div>
     
      <hr className="bg-rose-400"></hr>
  
      <Signup/>
    </div>
  );
}

export default Home;
