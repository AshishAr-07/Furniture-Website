'use client'
import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import Button from './Button'
import { motion } from 'framer-motion'


const featured =[
    {
        src :"/1.png",
        title:"Wooden Table",
        price : "1900"
    },
    {
        src :"/3.png",
        title:"Sofa Set",
        price : "3000"
    },
    {
        src :"/4.png",
        title:"Wooden Chair",
        price : "1500"
    },
    {
        src :"/2.png",
        title:"Chair Cum Sofa",
        price : "5000"
    },
]

export default function FeaturedProduct() {
  return (
<>
<Wrapper>
    <h1 className='w-full text-center pb-8'>Featured Products </h1>
<div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
{ featured.map((items,index)=>(
    <div key={index} className='flex flex-col '>
       <motion.div 
       whileHover={{ scale: 1.1 }}
       transition={{duration : 0.5}}
       className='relative border rounded  hover:shadow-md'>
       <Image  
        className='' alt={items.title} width={400} height={300} src={items.src} />
       </motion.div>
        <h2 className='pt-5 px-4'>{items.title}</h2>
        <h2 className='pt-2 px-4'>₹{items.price}</h2>
        

    </div>
))}
</div>
 <div className='w-full text-center pt-6'><Button className='border  px-8'>View All Products</Button></div>
</Wrapper>
</>
  )
}
