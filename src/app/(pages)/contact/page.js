'use client'

import Wrapper from '@/app/components/Wrapper'
import React from 'react'
import { IoLocationOutline } from "react-icons/io5"
import { LuPhone, LuMail } from "react-icons/lu"

export default function Component() {
  const handleSubmit = (event) => {
  try {
      event.preventDefault()
      const formData = new FormData(event.target)
      const formValues = Object.fromEntries(formData.entries())
      console.log('Form data:', formValues)
      event.target.reset()
      alert( "Form Submitted Successfully")

  } catch (error) {
    throw error
    alert("Error Please try Again Later")
  }
   
  }

  return (
    <Wrapper>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <section>
          <div className="p-6">
            <div className="space-y-6">
              {/* Address Section */}
              <div className="flex items-start shadow-md p-6 space-x-4">
                <div className="mt-1">
                  <IoLocationOutline size={40} />
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
                      href="mailto:contact@gmail.com" 
                      className="transition-colors hover:text-blue-600"
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
                  <div className="flex flex-col space-y-1">
                    <a 
                      href="tel:+91-00000000" 
                      className="transition-colors hover:text-blue-600"
                    >
                      +91-00000000
                    </a>
                    <a 
                      href="tel:+91-1111111122" 
                      className="transition-colors hover:text-blue-600"
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
          <form className='bg-white border rounded-lg border-gray-200 py-8 md:px-16 px-8' onSubmit={handleSubmit}>
            <h1 className='pb-8 text-4xl font-bold'>Get a Quote</h1>
            <div className='flex flex-col pb-4 gap-2'>
              <label htmlFor="name" className='text-xl'>
                Name
              </label>
              <input id="name" name="name" required className='border rounded-lg border-gray-200 py-2 px-3' />
            </div>
            <div className='flex flex-col pb-4 gap-2'>
              <label htmlFor="email" className='text-xl'>
                Email
              </label>
              <input id="email" name="email" type="email" required className='border rounded-lg border-gray-200 py-2 px-3' />
            </div>
            <div className='flex flex-col pb-4 gap-2'>
              <label htmlFor="phone" className='text-xl'>
                Phone
              </label>
              <input id="phone" name="phone" type="tel" required className='border rounded-lg border-gray-200 py-2 px-3' />
            </div>
            <div className='flex flex-col pb-4 gap-2'>
              <label htmlFor="message" className='text-xl'>
                Message
              </label>
              <textarea id="message" name="message" required className='border rounded-lg border-gray-200 p-3' rows={6} />
            </div>
            <button type="submit" className="bg-blue-600 w-full text-white text-xl  py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Submit
            </button>
          </form>
        </section>
      </div>
    </Wrapper>
  )
}