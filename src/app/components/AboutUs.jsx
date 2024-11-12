'use client'
import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutUs({page = ""}) {
    const fadeInUp = {
        initial: {
            opacity: 0,
            y: 60
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2  // Base delay for all fadeInUp animations
            }
        }
    }

    const staggeredImages = {
        initial: {
            opacity: 0,
            x: -30
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.4  // Base delay for images
            }
        }
    }

    return (
        <Wrapper>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <motion.section 
                    className='grid grid-cols-2 gap-6'
                    initial="initial"
                    whileInView="animate"
                    viewport={{ 
                        once: true,
                        margin: "-100px",  // Triggers animation 100px before element enters viewport
                        amount: 0.3  // Triggers when 30% of element is visible
                    }}
                >
                    <motion.div 
                        variants={staggeredImages}
                        className="relative mt-0 md:mt-16 aspect-square md:aspect-auto md:h-[400px]"
                    >
                        <Image 
                            src='/ab1.png' 
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            priority
                            alt="ab1"
                            className='rounded object-cover'
                        />
                    </motion.div>
                    <motion.div 
                        variants={staggeredImages}
                        transition={{ 
                            delay: 0.6  // Additional delay for second image
                        }}
                        className="relative aspect-square md:aspect-auto md:h-[400px]"
                    >
                        <Image 
                            src='/ab2.png' 
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            priority
                            alt="ab2"
                            className='rounded object-cover'
                        />
                    </motion.div>
                </motion.section>
                
                <motion.section 
                    initial="initial"
                    whileInView="animate"
                    viewport={{ 
                        once: true,
                        margin: "-100px",  // Triggers animation 100px before element enters viewport
                        amount: 0.3  // Triggers when 30% of element is visible
                    }}
                    variants={fadeInUp}
                >
                    <motion.h2 
                        variants={fadeInUp}
                        className='pb-2'
                    >
                        About Us
                    </motion.h2>
                    <motion.h1 
                        variants={fadeInUp}
                        transition={{ 
                            delay: 0.3  // Additional delay for heading
                        }}
                    >
                        Furniture That Feels Like Home.
                    </motion.h1>
                    <motion.p 
                        variants={fadeInUp}
                        transition={{ 
                            delay: 0.4  // Additional delay for first paragraph
                        }}
                        className='pt-4'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ducimus, reprehenderit veniam dolores ullam unde, voluptatum accusamus voluptatem inventore iure ipsam distinctio error delectus esse obcaecati impedit similique dolorem nobis.
                    </motion.p>
                    <motion.p 
                        variants={fadeInUp}
                        transition={{ 
                            delay: 0.5  // Additional delay for second paragraph
                        }}
                        className='mt-4'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ducimus, reprehenderit veniam dolores ullam unde, voluptatum accusamus voluptatem inventore iure ipsam distinctio error delectus esse obcaecati impedit similique dolorem nobis.
                    </motion.p>
                    
                    {page === "home" && (
                        <motion.div
                            variants={fadeInUp}
                            transition={{ 
                                delay: 0.6  // Additional delay for button
                            }}
                        >
                            <Link href='/about'>
                                <Button>View more</Button>
                            </Link>
                        </motion.div>
                    )}
                </motion.section>
            </div>
        </Wrapper>
    )
}