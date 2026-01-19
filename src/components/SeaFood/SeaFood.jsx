import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgFish from '../../assets/Fish.jpg'

const SeaFood = () => {
  return (
    <div>
      <CategoryPage title="Chicken and Seafood" bgImage={BgFish} categories={['Chicken & Seafood']}/>
    </div>
  )
}

export default SeaFood
