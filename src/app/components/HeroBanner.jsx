'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function HeroBanner() {
  return (
    <>
     <section className="relative md:h-[80vh] h-[50vh]  w-full flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('/heroimg.webp')] bg-cover bg-center bg-no-repeat"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <motion.div 
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: "100%" }}
       className="relative z-10  text-center px-4">
        <h1 className='text-white mb-3 text-3xl' >Woody Furniture</h1>
        <h1 className="md:w-3/4 md:mx-auto text-4xl md:text-6xl font-bold text-white mb-6">
          Elevate Your Home with Quality Furniture
        </h1>
        
      </motion.div>
    </section>
    </>
  )
}
