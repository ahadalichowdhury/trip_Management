import React from 'react'
import MainNav from '../components/HomePage/MainNav'
import SlideImages from '../components/HomePage/SlideImages'
import HomeCard from '../components/HomePage/HomeCard'
import HomeFeatures from '../components/HomePage/HomeFeatures'


function HomePage() {
  return (
    <div>
        <MainNav />
        <SlideImages />
        <HomeCard />
        <HomeFeatures />
    </div>
  )
}

export default HomePage