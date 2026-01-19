import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaShieldAlt } from "react-icons/fa";
import { FaLeaf, FaSeedling } from 'react-icons/fa6';
import Basket from '../../assets/Basket Vege.webp'

const Values = () => {

    const leftValues = value.slice(0,2).map(item =>{
        return(
            <div key={item.id} className='flex flex-row-reverse items-center gap-7 md:gap-7'>
                <div>
                    <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div className='text-right'>
                    <h3 className='text-zinc-800 text-2xl md:text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 text-sm md:text-base'>{item.para}</p>
                </div>
            </div>
        )
    })



    const rightValues = value.slice(2).map(item =>{
        return(
            <div key={item.id} className='flex items-center gap-5 md:gap-7'>
                <div>
                    <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div >
                    <h3 className='text-zinc-800 text-2xl md:text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 text-sm md:text-base'>{item.para}</p>
                </div>

            </div>
        )
    })


  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20'>
            <Heading highlight="Our" heading="Value"/>

            <div className='flex md:flex-row flex-col gap-15 md:gap-5 mt-15'>
                {/* Left value */}
                <div className='md:min-h-100 gap-15 flex md:flex-col-reverse flex-col md:flex-col justify-between'>
                        {leftValues}
                </div>


                <div className='w-1/2  md:flex hidden'>
                    <img src={Basket}/>
                </div>

                {/* Right value */}
                <div className='md:min-h-100 gap-15 flex flex-col justify-between '>
                        {rightValues}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values


const value = [
    {
        id:1,
        title: 'Trust',
        para: 'Trust in the food industry means ensuring safe, honest, high-quality products that consumers can depend on consistently.',
        icon: <FaHeart />
    },

    {
        id:2,
        title: 'Always Fresh',
        para: 'Always Fresh builds trust by delivering safe, high-quality, and consistently fresh products every time.',
        icon: <FaLeaf />
    },
    {
        id:3,
        title: 'Food Safety',
        para: 'Food safety builds trust by ensuring every product is clean, fresh, and handled with care.',
        icon: <FaShieldAlt />
    },
    {
        id:4,
        title: '100% Organic',
        para: '100% organic builds trust by offering pure, chemical-free food grown naturally for healthier, safer choices.',
        icon: <FaSeedling />
    },
]
