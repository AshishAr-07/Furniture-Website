import React from 'react'
import { BiChair } from "react-icons/bi";
import { GiSofa } from "react-icons/gi";
import { MdTableRestaurant } from "react-icons/md";
import { PiDeskFill } from "react-icons/pi";
import Wrapper from './Wrapper';

const cat = [
    {
        icon: BiChair,
        title: "Chair"
    },
    {
        icon: GiSofa,
        title: "Sofa-Set"
    },
    {
        icon: MdTableRestaurant,
        title: "Table"
    },
    {
        icon: PiDeskFill,
        title: "Work Desk"
    },
]

export default function Category() {
    return (
        <>
            <Wrapper >
                <h1 className='w-full text-center pb-12'>Products Category </h1>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    {cat.map((items, index) => (
                        <div key={index} className='flex flex-col gap-2 justify-center items-center py-4'>
                            <items.icon color='#A1662F ' size={120} />
                            <h2 className='font-semibold'>{items.title}</h2>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </>
    )
}
