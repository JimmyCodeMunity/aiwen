import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import AllPrograms from '../components/AllPrograms'
import Partners from '../components/Partners'

const AboutPage = () => {
  return (
    <div className="flex-1 w-full overflow-hidden bg-primary">
      <div className="flex sm:px-16 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Navbar />
        </div>
      </div>

      <div className="flex sm:px-6 px-6 justify-center items-center bg-white w-full">
        <div className="w-full xl:max-w-[1280px]">
          {/* Your Homepage Content */}
          <About/>
        </div>
      </div>
      {/* <div className="flex sm:px-6 px-6 justify-center items-center bg-white w-full">
        <div className="w-full xl:max-w-[1280px]">
          <AllPrograms/>
        </div>
      </div> */}
      <div className="flex justify-center items-center bg-white w-full">
        <div className="w-full">
          {/* Your Homepage Content */}
          <Partners/>
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

export default AboutPage
