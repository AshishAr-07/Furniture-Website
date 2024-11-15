'use client'
import React from 'react';
import Wrapper from './Wrapper';
import { GoPlus } from "react-icons/go";
import Button from './Button';

export default function Bgfixed() {
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
    <>
      <div className="relative py-12">
        {/* Background with fixed positioning */}
        <div className='bg-[url("/fxdbg.webp")] bg-fixed relative bg-cover bg-center'>
          {/* Black overlay */}
          <div className="absolute inset-0  bg-black/50"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <Wrapper>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
                <section>
                  <h1 className='text-white '>
                    Elevate Your Home with Quality Furniture.
                  </h1>
                  <Button className='flex items-center gap-2 mt-8 text-xl bg-transparent text-white border-white'>Contact Now<GoPlus color='white' /></Button>
                </section>
                <section >
      
               <form className='bg-white border rounded-lg border-gray-200 md:mb-[-150px] py-8 md:px-16 px-8' onSubmit={handleSubmit}>
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
            <button type="submit" className="bg-blue-600 w-full text-xl text-white  py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Submit
            </button>
          </form>

                </section>
              </div>
            </Wrapper>
          </div>
        </div>
      </div>
    </>
  );
}