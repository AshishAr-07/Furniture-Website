import React from 'react'
import AboutUs from './components/AboutUs'
import Bgfixed from './components/Bgfixed'
import Testinomial from './components/Testinomial'
import FeaturedProduct from './components/FeaturedProduct'
import Support from './components/Support'
import Wedo from './components/Wedo'
import HeroBanner from './components/HeroBanner'

export default function page() {
  return (
    <>
    <HeroBanner/>
    <AboutUs/>
    <FeaturedProduct/>
    <Wedo/>
    <Support/>
    <Bgfixed/>
    <Testinomial/>
    </>
  )
}
