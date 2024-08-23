import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Programs from '../components/Programs'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Stats from '../components/Stats'
import Partners from '../components/Partners'

const HomePage = () => {
  return (
    <div className="flex-1 w-full overflow-hidden bg-primary">
      <div className="flex sm:px-16 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Navbar />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          {/* Your Homepage Content */}
          <Hero/>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          {/* Your Homepage Content */}
          <Stats/>
        </div>
      </div>
      <div className="flex justify-center items-center bg-white w-full">
        <div className="w-full xl:max-w-[1280px]">
          {/* Your Homepage Content */}
          <Programs/>
        </div>
      </div>
      <div className="flex justify-center items-center bg-white w-full">
        <div className="w-full xl:max-w-[1280px]">
          {/* Your Homepage Content */}
          <Partners/>
        </div>
      </div>
      <div className="flex justify-center items-center bg-white w-full">
        <div className="w-full xl:max-w-[1280px]">
          {/* Your Homepage Content */}
          <Testimonials/>
        </div>
      </div>
      <div className="flex justify-center items-center bg-white w-full">
        <div className="w-full xl:max-w-[1280px]">
          {/* Your Homepage Content */}
          <Newsletter/>
        </div>
      </div>
      
      <div className="flex sm:px-6 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HomePage
