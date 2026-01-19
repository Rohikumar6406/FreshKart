import React from 'react'
import Grocery from '../../assets/basket-full-vegetables.jpg'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <section>
        <div className='min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center mt-10 md:pt-25 pt-35'>
            {/* Hero Content */}
            <div className='flex-1'>
                <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Get the best quality at affordable prices...</span>
                <h1 className='md:text-5xl/16 text-5xl/14 font-bold mt-5'>
                    Organic <span className='text-orange-500'>veggies</span>, fresh <span className='text-orange-500'>meat</span> & <span className='text-orange-500'>fish</span>—delivered in your city.
                </h1>
                <p className='text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10'>
                    Grown for a high content of beneficial substances. Our products are all fresh and healthy
                </p>
                <Button content= "Shop Now"/>

            </div>

            {/* Hero Image */}
            <div className='flex-1'>
                <img src={Grocery} alt='Hero Image'></img>
            </div>
        </div>
    </section>
  )
}

export default Hero
