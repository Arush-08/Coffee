import React from 'react';
import { motion } from 'framer-motion';

function Services() {
  return (
    <div className="container mx-auto p-4"> {/* Responsive container */}
      <div className="text-center mb-8"> {/* Centered title with margin */}
        <h2 className="text-3xl font-bold">Our Services</h2> {/* Increased title size */}
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10"> {/* Flex wrap for responsiveness */}
        <div className="w-full md:w-1/3 lg:w-1/4 text-center"> {/* Responsive width for cards */}
          <motion.img
            initial={{ opacity: 0.7, x: 0 }}
            animate={{ opacity: 0.9, x: 0 }} // Animate to x: 0 for smoother transition
            whileHover={{ scale: 1.2 }} // Slightly larger scale on hover
            transition={{ duration: 0.5 }} // Added transition duration
            src='https://sleepyowl.co/cdn/shop/files/Instant_Hero_Desktop_Dec_24.jpg?v=1734583546'
            alt="Coffee" // Added alt text for accessibility
            className='w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-md mb-2' // Responsive image size, object-cover, rounded corners, and shadow
          />
          <motion.h5
            initial={{ opacity: 0.7, y: 20 }} // Animate from below
            animate={{ opacity: 0.9, y: 0 }} // Animate to y: 0
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.2 }} // Scale slightly on hover
            className='text-xl font-bold italic' // Removed border and shadow from text
          >
            Coffee
          </motion.h5>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4 text-center"> {/* Responsive width for cards */}
          <motion.img
            initial={{ opacity: 0.7, x: 0}}
            animate={{ opacity: 0.9, x: 0 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqyu0_yXupz-F_-Psb2dsUgTO633NePfdMArijFMuiTvDYAyxtC36lLnDrXzF_bVwDREI&usqp=CAU'
            alt="Deserts"
            className='w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-md mb-2'
          />
          <h5 className='text-xl font-bold italic'>Deserts</h5>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4 text-center"> 
          <motion.img  initial={{ opacity: 0.7, x: 0}}
            animate={{ opacity: 0.9, x: 0 }}
            whileHover={{ scale: 1.2}}
            transition={{ duration: 0.5 }}
            src='https://www.swadinstitute.com/s/store/courses/6465f247e4b0352d53993f3f/cover.jpg?v=3'
            alt="Specials"
            className='w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-md mb-2'
          />
          <h5 className='text-xl font-bold italic'>Specials</h5>
        </div>
      </div>
    </div>
  );
}

export default Services;