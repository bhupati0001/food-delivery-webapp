import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {
  const [menuCategory, setMenuCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu menuCategory={menuCategory} setMenuCategory={setMenuCategory} />
      <FoodDisplay menuCategory={menuCategory} />
    </div>
  )
}

export default Home