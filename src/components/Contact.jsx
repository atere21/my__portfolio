import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a132f] flex jusify-center items-center p-4'  >
     <form action='' className='flex flex-col max-w-[400px] pb-5 shadow-lg shadow-[#040c16] group container rounded-md jusify-center  mx-auto contactForm' >
      <div className='pb-2' >
        <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Contact</p>
        <p className='text-gray-300 py-3'>Submit the form below or shoot me an email-tosinateret@gmail.com</p>
      </div>
      <input className='bg-[#ccd6f6] p-2 ' type='text' placeholder='Name' name='name' />
      <input className='my-4 p-2 bg-[#ccd6f6]' type='text' placeholder='Email' name='email' />
      <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' name='message' rows='10 my-9'></textarea>

        <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-1 '>Lets Collaborate</button>
     </form>
    </div>
  )
}

export default Contact