import React from 'react'
import HomeSlider from '../components/home/HomeSlider'
import OurServices from '../components/home/OurServices'
import LatestProperties from '../components/home/LatestProperties'
import LatestBlog from '../components/home/LatestBlog'
import Testimonials from '../components/home/Testimonials'

export default function HomePage() {
    return (
        <div className='home-page'>
            <HomeSlider />
            <OurServices />
            <LatestProperties/>
            <LatestBlog/>
            <Testimonials/>
        </div>
    )
}
