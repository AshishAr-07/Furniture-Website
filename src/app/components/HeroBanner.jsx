import React from 'react'

export default function HeroBanner() {
  return (
    <>
     <section className="relative md:h-[85vh] h-[50vh]  w-full flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('/heroimg.webp')] bg-cover bg-center bg-no-repeat"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10  text-center px-4">
        <h1 className='text-white mb-3 text-3xl' >Furni Furniture</h1>
        <h1 className="md:w-3/4 md:mx-auto text-4xl md:text-6xl font-bold text-white mb-6">
          Elevate Your Home with Quality Furniture
        </h1>
        
      </div>
    </section>
    </>
  )
}
