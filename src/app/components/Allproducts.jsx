'use client'
import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import Button from './Button'
import { motion } from 'framer-motion'
import {Data} from '../Api'
import Link from 'next/link'

export default function AllProduct({activepage = "product"}) { 
  
  
    const FeaturedProduct = activepage =="homepage"?Data.slice(0,4) : Data ;
  return (
<>
<Wrapper>
    <h1 className='w-full text-center pb-8'>{activepage === "homepage" ? "Featured Products" : "All Products"} </h1>
<div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
{ FeaturedProduct.map((items,index)=>(
    <div key={index} className='flex flex-col '>
       <motion.div 
       whileHover={{ scale: 1.1 }}
       transition={{duration : 0.5}}
       className='relative border rounded  hover:shadow-md'>
       <Image  
        className='w-full h-auto' alt={items.title} width={400} height={300} src={items.src} />
       </motion.div>
        <h2 className='pt-5 px-4'>{items.title}</h2>
        <h2 className='pt-2 px-4'>₹{items.price}</h2>
        

    </div>
))}
</div>
{activepage==="homepage" &&
  (<div className='w-full text-center pt-6'><Link href='/product'><Button className='border  px-8'>View All Products</Button></Link></div>)
 }

</Wrapper>
</>
  )
}
