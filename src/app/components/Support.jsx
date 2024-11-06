import React from 'react'
import Wrapper from './Wrapper'
import { AiOutlineCustomerService } from "react-icons/ai";
import { PiThumbsUpDuotone } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";

const feature = [
    {
        icon : AiOutlineCustomerService,
        title : "Cutomer Support"
    },
    {
        icon : PiThumbsUpDuotone,
        title : "Quality Assurance"
    },
    {
        icon : CiDeliveryTruck,
        title : "Easy Shipment"
    },
]

export default function Support() {
  return (
<>
<Wrapper>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
  
        {feature.map((items,index)=>(
            <div key={index} className='border rounded-lg shadow-lg flex gap-8 justify-center items-center py-5 '>
            <items.icon size={45}/>
            <h2 className='text-center'>{items.title}</h2>
        </div>
        ))}


   
    </div>
</Wrapper>
</>
  )
}