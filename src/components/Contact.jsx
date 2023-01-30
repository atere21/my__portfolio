import React from 'react'

function Contact() {
  return (
    <div className='w-full h-screen bg-[#0a132f] flex jusify-center items-center px-14 pb-6'  >
     <form action='' className='flex flex-col  max-w-[600px] w-full pb-5 ' >
      <div className='pb-8' >
        <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Contact</p>
        <p className='text-gray-300 py-4'>Submit the form below or shoot me an email-tosinateret@gmail.com</p>
      </div>
      <input className='bg-[#ccd6f6] p-2 ' type='text' placeholder='Name' name='name' />
      <input className='my-4 p-2 bg-[#ccd6f6]' type='text' placeholder='Email' name='email' />
      <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' name='message' rows='10 my-9'></textarea>

        <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-4 '>Lets Collaborate</button>
     </form>
    </div>
  )
}

export default Contact