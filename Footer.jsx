import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div>
         <footer className='bg-gradient-to-r from-[
#d9a7c7] via-[#FFAB78] to-[#493d82]   relative px-4 md:px-16 lg:px-28' >
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div>
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quisquam rerum atque quo deleniti saepe repellat vel autem, exercitationem beatae hic quaerat earum consectetur et libero, praesentium ducimus architecto tempore!</p>
                </div>
                <div className='flex flex-col'>
                    <h2>Quick Links</h2>
                    <ul className='flex flex-col'>
                        <Link to='/' className='p-1 text-lg text-black uppercase border-black'>Home</Link>
                        <Link to='/services' className='p-1 text-lg text-black uppercase border-black'>Services</Link>
                        <Link to='/about' className='p-1 text-lg text-black uppercase border-black'>About us</Link>
                        <Link to='/contact' className='p-1 text-lg text-black uppercase border-black'>Contact Us</Link>
                    </ul>
                </div>
                <div>
                    <h3>Follow Us</h3>
                    <ul className='flex flex-row space-x-4'>
                        <li className='flex flex-row space-x-4'>
                            {""}
                            <FaFacebook className='size-8'/>
                            <FaInstagram className='size-8'/>
                            <FaXTwitter className='size-8'/>
                        </li>

                    </ul>

                </div>


            </div>

         </footer>
    </div>
  )
}

export default Footer
