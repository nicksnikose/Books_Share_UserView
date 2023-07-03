/* eslint-disable no-irregular-whitespace */
import { socials } from "../utilities";



const Footer = () => (
  <footer
  className=" py-8 relative p-10 bg-[#000]">
  <div className="footer-gradient"/>
    <div className=" mx-auto
    flex flex-col gap-8">
    <div className="flex items-center justify-between flex-wrap gap-5">
        <h5 className="p-3 rounded-lg md:text-[34px] lg:text-[40px]
   border border-[#fff] text-[#988E8E] text-center">Sharing books and stories with children helps their learning, development language and communication</h5>
    <h4 className="font-bold md:text-[64px] text-[44px]
  text-white  ">Enter the Books Share </h4>
  <button type="button" className="flex item-center h-fit py-4 px-6 bg-[#81A356]
  rounded-[32px] gap-[12px] ">
    <img src="./images/logo.jpeg" alt="headset" className="w-[24px] h-[24px] object-contain" />
    <span className="font-normal text-[16px] text-white"> Books Share </span>
  </button>
    </div>
    <div className="flex flex-col">
    <div className="mb-[50px] h-[2px] bg-white opacity-10"/>
    <div className="flex items-center justify-between flex-wrap 
    gap-4">
 <h4 className="font-extrabold text-[24px] text-white">
 Books Share 
 </h4>
 <p className="font-normal text-[14px] text-white opacity-50">
 Copyright 2022-2023 Books Share All rights reserved 
 </p>
 <div className="flex gap-4">
{socials.map((social)=>(
  <img src={social.url} alt={social.name} key={social.name}
    className="w-[34px]  h-[34px] object-contain cursor-pointer "
  />
))}
 </div>
    </div>
    </div>
    </div>
  </footer>
);

export default Footer;