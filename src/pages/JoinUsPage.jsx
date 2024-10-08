import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import JoinForm from '../components/JoinForm'

const JoinUsPage = () => {
  return (
    <div className="flex-1 w-full overflow-hidden bg-primary">
      <div className="flex sm:px-16 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Navbar />
        </div>
      </div>

      
      <div className="flex justify-center items-center bg-white w-full">
        <div className="w-full xl:max-w-[1280px]">
          {/* Your Homepage Content */}
          <JoinForm/>
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

export default JoinUsPage
