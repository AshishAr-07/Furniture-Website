import React from 'react'
import AboutUs from './components/AboutUs'
import Bgfixed from './components/Bgfixed'
import Category from './components/Category'
import Testinomial from './components/Testinomial'
import FeaturedProduct from './components/FeaturedProduct'
import Support from './components/Support'
import Wedo from './components/Wedo'

export default function page() {
  return (
    <>
    <AboutUs/>
    <Wedo/>
    <Support/>
    <Bgfixed/>
    <Testinomial/>
    <FeaturedProduct/>
    </>
  )
}
