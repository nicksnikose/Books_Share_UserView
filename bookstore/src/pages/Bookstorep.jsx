import React from 'react'
import  Navbar from '../components/Navbar'
import Bookstore from '../components/BookStore'

const Bookstorep = () => {
  return (
    <div>  
    <div><Navbar/></div>
    <div className="flex justify-center items-center">
    <div className=" 2xl:container  ">
    <div className='lg:mt-24 mt-20'><Bookstore/></div>
    </div>
    </div></div>
  )
}

export default Bookstorep;
