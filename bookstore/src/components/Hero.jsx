import { useState } from "react"
import { Link } from "react-router-dom"

const Hero = () => {
  
  return (
    <section className="relative p-[25px]">
    <div className="hero-container lg:p-[100px]  sm:p-[10px]">
    <div className="lg:flex flex-row-reverse justify-between ">

        <div className=" md:ps-[200px] ">
         <img className="shadow-2xl w-[400px] " src="./images/heroup.png" alt="main" />
        </div>
        <div className="hero-text lg:w-[560px] ">
            <h1 className=" text-[50px]  leading-[50px] ">Remove the darkness by giving the light of knowledge</h1>
            <p className="mt-8 text-[22px] " style={{fontFamily:"jejuMyeongjo"}}>
                from applied literature to education resources 
                we have lot of textbooks to offer you. we provide only the best books to you 
            </p>
            <div className="lg:w-[400px] flex justify-between p-5">
           <Link to="./Login"><button className="primary-button w-28">Log In</button></Link>
           <Link to="./register"><button className="primary-button w-28">Register</button></Link>
            </div>
        </div>
    </div>
    </div>

  
<div className="lg:pl-[100px] sm:p-[10px] ]">
<div className="lg:flex justify-between ">
<div className="">
<img className="w-[400px]" src="./images/hero1.jpeg" alt="hero1" />
</div>
<div className="lg:w-[450px] lg:pr-[50px]">
  <h1 className="lg:text-[40px]  text-[30px] " >
    We re All In Together Each And Every One Of Us Can Make A Difference By Giving Back
  </h1>
</div>
</div>
</div>

   
   </section>
  )
}

export default Hero

