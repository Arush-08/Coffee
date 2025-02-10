import React,{useEffect} from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'
import './About.css'

function About() {
  useEffect(() => {
      Aos.init({
        offset: 200,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
    }, []);
  return (
    <div className='shadow-2xl p-4 md:p-6 lg:p-8 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGrJECXIof0drG-Ft0s5ECKwjJ-ooPl5tvA&s)] bg-no-repeat bg-cover bg-center-2 m-2'>
      <h1 className='text-2xl text-center text-black uppercase underline hover:no-underline'>About Me</h1>
      <div className='flex flex-col md:flex-row gap-8 mt-4 p-4 items-center md:items-start'>
      <p data-aos="zoom-in" className='font-bold text-xl md:text-2xl text-black text-center md:text-left w-full md:w-2/3'>
      Arsu Coffee Store is a cozy and inviting café that offers a perfect blend of rich flavors, aromatic coffee, and a warm ambiance. Known for its high-quality coffee beans sourced from the finest plantations, Arsu Coffee Store serves a variety of beverages, including espresso, cappuccino, latte, and signature blends that cater to every coffee lover’s taste. 
      </p>
      <div className='flex flex-col w-full md:w-1/3 items-center'>
        <img src='https://img.freepik.com/free-psd/3d-illustration-delivery-man-character-holding-pizza_23-2149507170.jpg' 
        className='w-full max-w-xs md:max-w-sm lg:max-w-md'
        data-aos="zoom-in"/>
      </div>
      </div>
    </div>
  )
}

export default About
