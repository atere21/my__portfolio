import React from 'react'
import realestate from '../assets/realestate.jpg'

function Work() {
  return (
    <div className='w-full md:h-screen text-gray-300 bg-[#0a132f]'>
       <div className='max-w[1000px] mx-auto p-4 flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
            <p className='py-6'>Check out some of my recent work</p>
        </div>
        {/* container for projects */}
        <div style={{backgroundImage: '{realestate}'}}
        className='grid sm:grid-col-2 md:grid-col-3 gap-4'>
            {/* card div */}
            <div className='shadow-lg shadow-[#040c16] group container rounded-md flex jusify-center items-center mx-auto content-div'>
                {/* hover effect */}
                <div>
                    <span>

                    </span>
                    <div>
                        <a href='/'>
                            <button></button>
                        </a>
                        <a href='/'>
                            <button></button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Work