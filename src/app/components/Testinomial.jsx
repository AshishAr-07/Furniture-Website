'use client'
import React from 'react'
import Wrapper from './Wrapper'
import { RiDoubleQuotesR } from "react-icons/ri";
import { motion } from 'framer-motion';

const client = [
    {
        name: "Himesh",
        des: "I really want to thank you and your whole team from the bottom of my heart for making my wedding more than a dream.Every single person at the wedding was in awe of the decoration. You all managed everything so beautifully."
    },
    {
        name: "Himesh",
        des: "I really want to thank you and your whole team from the bottom of my heart for making my wedding more than a dream.Every single person at the wedding was in awe of the decoration. You all managed everything so beautifully."
    },
    {
        name: "Himesh",
        des: "I really want to thank you and your whole team from the bottom of my heart for making my wedding more than a dream.Every single person at the wedding was in awe of the decoration. You all managed everything so beautifully."
    },
]

export default function Testimonial() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { 
            opacity: 0,
            y: 20
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const quoteIcon = {
        initial: { scale: 0, rotate: -180 },
        animate: { 
            scale: 1, 
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        }
    };

    return (
        <Wrapper>
            <motion.h1 
                className='w-full text-center pb-8'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                What Customer Says?
            </motion.h1>
            
            <motion.div 
                className='grid grid-cols-1 md:grid-cols-3 gap-4'
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                {client.map((items, index) => (
                    <motion.section 
                        key={index} 
                        className='flex flex-col gap-6 p-6 shadow-md justify-center items-center bg-white rounded-lg'
                        variants={item}
                        whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.span
                            variants={quoteIcon}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            <RiDoubleQuotesR 
                                size={50}
                                className="text-gray-400"
                            />
                        </motion.span>
                        
                        <motion.p 
                            className='text-center text-gray-600'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {items.des}
                        </motion.p>
                        
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            
                        >
                            {items.name}
                        </motion.h2>
                    </motion.section>
                ))}
            </motion.div>
        </Wrapper>
    );
}