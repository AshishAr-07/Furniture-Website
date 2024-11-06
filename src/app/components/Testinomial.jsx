import React from 'react'
import Wrapper from './Wrapper'
import { RiDoubleQuotesR } from "react-icons/ri";

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

export default function Testinomial() {
    return (
        <>
            <Wrapper>
                <h1 className='w-full text-center pb-8'>What Customer Says?</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
{client.map((items,index)=>(
    <section key={index} className='flex flex-col gap-6 p-6 shadow-md justify-center items-center'>
<span><RiDoubleQuotesR size={50}/></span>
<p className='text-center'>{items.des}</p>
<h2>{items.name}</h2>
    </section>
))}
                </div>

            </Wrapper></>
    )
}
