import React from 'react';
import Wrapper from './Wrapper';
import { GoPlus } from "react-icons/go";
import Button from './Button';

export default function Bgfixed() {
  return (
    <>
      <div className="relative py-12">
        {/* Background with fixed positioning */}
        <div className='md:bg-[url("/fxdbg.webp")] bg-fixed relative bg-cover bg-center'>
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black md:bg-black/50"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <Wrapper>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
                <section>
                  <h1 className='text-white '>
                    Elevate Your Home with Quality Furniture.
                  </h1>
                  <Button className='flex items-center gap-2 text-xl bg-transparent text-white border-white'>Contact Now<GoPlus color='white' /></Button>
                </section>
                <section >
               <form className='bg-white border rounded-lg border-gray-200 md:mb-[-150px]  py-8 md:px-16 px-8'   >
                <h1 className='pb-8'>Get a Quote</h1>
                <div className='flex flex-col pb-4 gap-2'>
                <label className='text-2xl '>
                  Name
                </label>
                <input className='border rounded-lg border-gray-200 py-2 ' />
                </div>
                <div className='flex flex-col pb-4 gap-2'>
                <label className='text-2xl'>
                  Email
                </label>
                <input className='border rounded-lg border-gray-200 py-2 ' />
                </div>
                <div className='flex flex-col pb-4 gap-2'>
                <label className='text-2xl'>
                 Phone
                </label>
                <input className='border rounded-lg border-gray-200 py-2 ' />
                </div>
                <div className='flex flex-col pb-4 gap-2'>
                <label className='text-2xl'>
                  Message
                </label>
                <textarea className='border rounded-lg border-gray-200' rows={6} />
                </div>
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