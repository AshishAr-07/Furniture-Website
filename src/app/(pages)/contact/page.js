import Wrapper from '@/app/components/Wrapper'
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone, LuMail } from "react-icons/lu";

export default function page() {
  return (
    <>
    <Wrapper>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
<section >
<div className="p-6">
        <div className="space-y-6">
          {/* Address Section */}
          <div className="flex items-start shadow-md p-6 space-x-4">
            <div className="mt-1">
              <IoLocationOutline  size={40} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Corporate Office</h3>
              <div className="space-y-1 text-gray-600">
                <p>sector-99 panwail </p>
                <p>gali-6 Medium delhi</p>
                
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex items-start shadow-md p-6 space-x-4">
            <div className="mt-1">
              <LuMail size={40} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <div className="space-y-1">
                <a 
                  href="#" 
                  className=" transition-colors"
                >
                  contact@gmail.com
                </a>
           
              </div>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-start shadow-md p-6 space-x-4">
            <div className="mt-1">
              <LuPhone className="" size={40} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <div className=" flex flex-col  space-y-1">
                <a 
                  href="#" 
                  className=" transition-colors"
                >
                  +91-00000000
                </a>
                <a 
                  href="#" 
                  className=" transition-colors"
                >
                  +91-1111111122
                </a>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>

</section>
<section>
<form className='bg-white border rounded-lg border-gray-200 py-8 md:px-16 px-8'   >
                <h1 className='pb-8'>Get a Quote</h1>
                <div className='flex flex-col pb-4 gap-2'>
                <label className='text-xl '>
                  Name
                </label>
                <input className='border rounded-lg border-gray-200 py-2 ' />
                </div>
                <div className='flex flex-col pb-4 gap-2'>
                <label className='text-xl'>
                  Email
                </label>
                <input className='border rounded-lg border-gray-200 py-2 ' />
                </div>
                <div className='flex flex-col pb-4 gap-2'>
                <label className='text-xl'>
                 Phone
                </label>
                <input className='border rounded-lg border-gray-200 py-2 ' />
                </div>
                <div className='flex flex-col pb-4 gap-2'>
                <label className='text-xl'>
                  Message
                </label>
                <textarea className='border rounded-lg border-gray-200' rows={6} />
                </div>
               </form>
</section>
        </div>
    </Wrapper>
    </>
  )
}
