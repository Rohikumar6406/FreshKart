import React from 'react'
import BgAll from '../../assets/AllProduct.jpg'
import CategoryPage from '../CategoryPage/CategoryPage'

const AllProduct = () => {
  return (
    <div>
      <CategoryPage title="All Product" bgImage={BgAll} categories={['All']}/>
    </div>
  )
}

export default AllProduct
