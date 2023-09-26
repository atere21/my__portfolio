import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-[600px] absolute bg-[#0a132f] text-gray-300 my-12 mt-0' >
        <div className='flex flex-col justify-center intems-center'>
           <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
             <div className='sm:text-right my-14 mx-22'>
            <p className='text-4xl md:text-5xl font-bold inline border-b-4 my-4 mx-[80px] border-pink-600'>About
            </p>
            </div>
            
           </div>
           <div className='max-w-[1000px]  mx-8 grid sm:grid-cols-2 gap-8 px-5'>
             <div className='sm:text-right md:text-4xl font-bold'>
               <p className='text-xl md:text-2xl '>Hi. I'm Tosin, nice to meet you. Please <br/> take a look around.</p>
             </div>
             <div className=''>
                <p className='text-xl '>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>
             </div>
           </div>
        </div>

    </div>
  )
}

export default About