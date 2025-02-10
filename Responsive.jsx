import React,{useRef,useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link} from 'react-router-dom'

function Responsive({open,setOpen}) {
    
   

const handleClose = () => setOpen(false);

  return (
    <div>
        <AnimatePresence mode='wait'>
            {open && (
                <motion.div
                initial={{opacity:0.5,y:-100}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0.7,y:-100}}
                className='absolute top-20 left-0 w-full h-screen z-20 lg:hidden'
> 
                <div className='text-2xl text-white bg-black uppercase py-10 m-6 rounded-2xl'>
                <div className={`md:flex space-x-4 ${open ? 'block' : 'hidden'}`}>
                    <ul className='flex flex-col justify-center items-center gap-5'>
                        <Link to='/' onClick={handleClose}>Home</Link>
                        <Link to='/about' onClick={handleClose}>About</Link>
                        <Link to='/gallery' onClick={handleClose}>Gallery</Link>
                        <Link to='/signup' onClick={handleClose}>SignUp</Link>
                        <Link to='/login' onClick={handleClose}>Login</Link>
                        <Link to='/service' onClick={handleClose}>Services</Link>
                        <Link to='/contact' onClick={handleClose}>Contact</Link>
                    </ul>
                    </div>  
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default Responsive
