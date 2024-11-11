'use client'
import React, { useCallback, useState } from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import { RxHamburgerMenu,RxCross2  } from "react-icons/rx";

export default function Header() {
    const [isMenuOpen ,setIsMenuOpen] =useState(false)

const handleClick = useCallback(()=> setIsMenuOpen(prev => !prev) ,[])

  return (
    <header className='w-full sticky top-0 left-0 right-0 z-50 bg-gray-100'>
<Wrapper className='py-6'>
    <div className='flex justify-between items-center'>
        <div>
        <Image  width={150} height={50} alt='logo' src="/logo.png"/>
        </div>
        <nav className='md:flex hidden'>
            <ul className='flex  text-lg gap-5'>
<Link href="/" ><li>Home </li></Link>
<Link href="/about" ><li>About </li></Link>
<Link href="/product" ><li>Product </li></Link>
<Link href="/contact" ><li>Contact </li></Link>
            </ul>
        </nav>
    
{/* Mobile navbar */}

    <nav className='md:hidden'>
        <button onClick={handleClick}>{isMenuOpen ? <RxCross2 size={35}/> : <RxHamburgerMenu size={35}/>   }</button>
    </nav>
    </div>
</Wrapper>
{isMenuOpen && (
    <div className='absolute w-full  bg-gray-100'>
<Wrapper className='py-4'>
<ul className= 'flex flex-col text-lg gap-5'>
<Link href="/" ><li>Home </li></Link>
<Link href="/about" ><li>About </li></Link>
<Link href="/product" ><li>Product </li></Link>
<Link href="/contact" ><li>Contact </li></Link>
    </ul>
</Wrapper>
    </div>
    

)
}
    </header>
  )
}
