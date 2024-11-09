import React from 'react'
import HeroBanner from './components/HeroBanner'
import AboutUs from './components/AboutUs'
import FeaturedProduct from './components/FeaturedProduct'
import Wedo from './components/Wedo'
import Support from './components/Support'
import Bgfixed from './components/Bgfixed'
import Testinomial from './components/Testinomial'


export default function page() {
  return (
    <>
   <HeroBanner/>
   <AboutUs/>
   <FeaturedProduct activepage='homepage'/>
   <Wedo/>
   <Support/>
   <Bgfixed/>
   <div className='py-6'></div>
   <Testinomial/>
    </>
  )
}
