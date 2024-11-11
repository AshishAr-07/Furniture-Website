'use client'
import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import Button from './Button'
import { motion } from 'framer-motion'

export default function AboutUs() {
    return (
        <>
            <Wrapper>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <section className='grid grid-cols-2 gap-6'>
                    <div className="relative mt-0  md:mt-16 aspect-square md:aspect-auto md:h-[400px] ">
                            <Image 
                                src='/ab1.png' 
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                                priority
                                alt="ab1"
                                className='rounded object-cover'
                            />
                        </div>
                        <div className="relative aspect-square md:aspect-auto md:h-[400px] ">
                            <Image 
                                src='/ab2.png' 
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                                priority
                                alt="ab2"
                                className='rounded object-cover'
                            />
                        </div>
                    </section>
                    <section 
                   >
                        <h2 className='pb-2'>About Us</h2>
                        <h1>Furniture That Feels Like Home.</h1>
                        <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ducimus, reprehenderit veniam dolores ullam unde, voluptatum accusamus voluptatem inventore iure ipsam distinctio error delectus esse obcaecati impedit similique dolorem nobis.</p><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ducimus, reprehenderit veniam dolores ullam unde, voluptatum accusamus voluptatem inventore iure ipsam distinctio error delectus esse obcaecati impedit similique dolorem nobis.</p>
                        <Button>View more</Button>
                    </section>

                </div>


            </Wrapper>
        </>
    )
}
