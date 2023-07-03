import React from 'react'
import DonorC from '../components/donor2'
import Footer from '../components/Fotter'
import  Navbar from '../components/Navbar'

const Donor = () => {
  return (
    <div>
      <div><Navbar/></div>
      <div className="flex justify-center items-center">
    <div className=" 2xl:container  ">
        <div className="lg:mt-24 mt-20"><DonorC/><br
         /> </div>
        <div><Footer/></div>
        </div> </div>   
    </div>
    
  )
}

export default Donor
