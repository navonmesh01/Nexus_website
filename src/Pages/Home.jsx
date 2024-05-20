import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import Foter from '../Components/Foter/Foter'
import { Testimonial } from '../Components/Testimonial/Testimonial'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <Testimonial/>
        {/* <Foter/> */}
    </div>
  )
}
export default Home
