import React from 'react'
import HeroBanner from './components/HeroBanner'
import AboutUs from './components/AboutUs'
import Wedo from './components/Wedo'
import Support from './components/Support'
import Bgfixed from './components/Bgfixed'
import Testinomial from './components/Testinomial'
import AllProduct from './components/Allproducts'


export default function page() {
  return (
    <>
   <HeroBanner/>
   <AboutUs page='home'/>
   <AllProduct activepage='homepage'/>
   <Wedo/>
   <Support/>
   <Bgfixed/>
   <div className='py-6'></div>
   <Testinomial/>
    </>
  )
}
