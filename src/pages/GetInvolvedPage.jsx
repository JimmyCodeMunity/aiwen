import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GetInvolved from '../components/GetInvolved'

const GetInvolvedPage = () => {
  return (
    <div className="flex-1 w-full overflow-hidden bg-primary">
      <div className="flex sm:px-16 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Navbar />
        </div>
      </div>

      <div className="flex sm:px-6 px-6 justify-center items-center bg-white">
        <div className="w-full xl:max-w-[1280px]">
          {/* Your Homepage Content */}
          <GetInvolved/>
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

export default GetInvolvedPage
