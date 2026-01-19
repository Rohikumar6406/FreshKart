import React from 'react'

const Banner = ({title,bgImage}) => {
  return (
    <div className='h-[50vh] mt-25 flex justify-center items-center bg-center bg-cover relative'
    style={{backgroundImage: `url(${bgImage})`}}>
      <h2 className='text-5xl text-zinc-800 p-5 rounded-x1 font-bold z-10'>{title}</h2>
      <div className='bg-black/50 absolute insert-0'></div>
    </div>
  )
}

export default Banner
