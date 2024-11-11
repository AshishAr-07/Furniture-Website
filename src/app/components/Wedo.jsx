'use client'
import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import { motion } from 'framer-motion'

const featured = [
  {
    src: "/w1.png",
    title: "Living Room Furniture",
    width: 200,
    height: 126
  },
  {
    src: "/w2.png",
    title: "Kitchen Furniture",
    width: 200,
    height: 144
  },
  {
    src: "/w3.png",
    title: "Bedroom Furniture",
    width: 250,
    height: 97
  },

]

export default function Wedo() {
  return (
    <>
      <Wrapper>
        <h1 className='w-full text-center pb-4'>What We Made </h1>
        <p className='md:w-1/2 md:mx-auto text-center pb-16'>We create beautifully functional pieces that elevate your space, combining quality craftsmanship with thoughtful design to last for years to come.</p>
        <div className='grid  grid-cols-1 md:grid-cols-3 gap-6'>
          {featured.map((items, index) => (
            <div key={index} className='flex flex-col justify-center items-center '>
              <motion.div
                whileHover={{ scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className='border flex justify-center items-center h-[250px] w-[400px] box-border rounded bg-[#d18c4c] '>
                <Image style={{
                  height: 'auto'
                }} alt={items.title} width={items.width} height={items.height} src={items.src} />
              </motion.div>
              <h2 className='pt-5 text-2xl'>{items.title}</h2>
            </div>
          ))}
        </div>

      </Wrapper>
    </>
  )
}
