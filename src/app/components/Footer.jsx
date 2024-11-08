import React from 'react'
import Wrapper from './Wrapper'
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone, LuMail } from "react-icons/lu";
import Link from 'next/link';
import Image from 'next/image';


export default function Footer() {
  return (
    <div className='w-full bg-gray-100'>
      <Wrapper className='pb-0'>
<div className='grid grid-cols-1 md:grid-cols-3 gap-12 py-2 '>
  <section className='flex flex-col gap-2'>
<Image  width={150} height={50} alt='logo' src="/logo.png"/>
<h2>Elevate your Home with Quality Furniture</h2>
  </section>
  <section className='flex flex-col gap-2'>
    <h1 className='text-2xl pb-2 font-medium '>Quick Links</h1>
    <Link href='#' ><h2>Home</h2></Link>
    <Link href='#' ><h2>About</h2></Link>
    <Link href='#' ><h2>Service</h2></Link>
    <Link href='#' ><h2>Contact</h2></Link>
  </section>
  <section className='flex flex-col gap-4'>
    <h1 className='text-2xl pb-2 font-medium '>Contact Details</h1>
    <h2 className='flex gap-3 items-center'><IoLocationOutline size={25}/> sector-99 panwail gali-6 Medium delhi</h2>
    <h2 className='flex gap-3 items-center'><LuPhone size={22}/> +91-543219876</h2>
    <h2 className='flex gap-3 items-center'><LuMail size={22}/> @info.com</h2>
   
  </section>
  

</div>
<div className='w-full mt-8 text-lg py-3 border-t border-black'>©Furni 2024 | All Rights Reserved | Design By Ashish Rawat </div>
      </Wrapper>
    </div>
  )
}
