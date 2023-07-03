import React from 'react'
import Footer from './Fotter'

const Middle = () => {
    return (
           <>      
        <div className='lg:flex justify-around lg:p-[50px] md:p-[20px] sm:p-[20px] p-4 '>
            <div className=''>
                <h1 className='lg:font-bold font-[Inter]'>Nothing Acts Faster Than Book</h1>
                <p className='lg:font-bold text-blue-400 lg:pt-5 font-[Inter]'>VISION</p>
                <div className='lg:pt-10'>
                    <h1 className='font-black lg:text-[30px]  font-[Inter]'>WE HELP PEOPLE
                        ACROSS THE GLOBE</h1>
                </div>
                <div className='text-[12px] md:text-[18px] p-2'>
                    <p className='lg:pt-3 font-[Inter]'>The work of the Books Shares Foundation,
                        Which began with helping the needy one
                        to find the Book.</p>
                    <p className='lg:pt-5 font-[Inter]'>We have representative offices all over 
                      the world and work with the international
                       organizations.</p>
                    <p className='lg:pt-5 font-[Inter]'>
                    Our main activities are Educational aid,
                    assistance to needy one.  
                    </p>
                </div>

            </div>
            
            <div className='lg:p-[40px] p-4 lg:-me-14'>
                <div className="relative flex lg:w-80 flex-col rounded-xl bg-[#F2F2F2] bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 lg:-mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                        <img
                            src="./Images_about/bapuji.png"
                            alt="img-blur-shadow"
                            layout="fill"
                        />
                    </div>
                    <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            JOIN OUR FOUNDATION!
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            BECOME A VOLUNTEER </p>
                    </div>

                </div>
            </div>

        </div>
    
        {/* next */}
     
      
        <div className='lg:p-[50px] md:p-[50px] sm:p-[50px] p-[30px]'>
                <div className='flex lg:justify-around md:justify-around sm:justify-around items-center'>
                    <div className=' relative flex lg:w-44  w-full flex-col px-2' >
                    <img src='./Images_about/handshake-angle-solid 1.png' alt="logo1" className='p-2  w-auto' />
                    <p className='text-center font-[Inter] font-extrabold p-2 md:text-[15px] sm:text-[12px] text-[8px]'>3200+</p>
                    <p className='text-center font-[Inter] font-extrabold pb-3 md:text-[15px] lg:text-[18px] sm:text-[12px] text-[9px]'>Volunteers in different countries, including combat zones. </p>
                    </div>
                    
                    <div className='relative flex lg:w-44  w-full flex-col px-2'>
                    <img src='./Images_about/users-solid 1.png' alt="logo1" className='p-2  w-auto'/>
                    <p className='text-center font-[Inter] font-extrabold p-2 md:text-[15px] sm:text-[12px] text-[8px]'>6000+</p>
                    <p className='text-center font-[Inter] font-extrabold pb-3 md:text-[15px] lg:text-[18px] sm:text-[12px] text-[9px] '>Book Donor in the Maharashtra 
                        State for our campaigns.  </p>
                    </div>
                    <div className='relative flex lg:w-44  w-full flex-col px-2'>
                    <img src='./Images_about/book-solid 1.png' alt="logo1" className=' p-2 -mt-5 w-auto' />
                    <p className='text-center font-[Inter] font-extrabold p-2 md:text-[15px] sm:text-[12px] text-[8px]'>345,990+</p>
                    <p className='text-center font-[Inter] font-extrabold pb-3 md:text-[15px] lg:text-[18px] sm:text-[12px] text-[9px]'>Used Books for new one to raise the World. </p>
                    </div>
                </div>
        </div>




        {/* {bottom image} */}

        <div className='lg:mt-10'>
            <img src='./Images_about/lo.png' alt="logo1" className='' />
        </div>

        
        </>
    )
}

export default Middle