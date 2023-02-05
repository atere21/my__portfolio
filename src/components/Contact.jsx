import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a132f] flex jusify-center items-center p-4'  >
     <form method='post' action='https://getform.io/f/7db35b52-2504-4784-b131-ed5673e83177' className='flex flex-col max-w-[400px] pb-5 shadow-lg shadow-[#40c16] group container rounded-md justify-center my-6 mx-auto contactForm' >
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4  border-pink-600 text-gray-300 '>Contact</p>
        <p className='text-gray-300 py-3'>Submit the form below or email-tosinateret@gmail.com</p>
      </div>
      <input className='bg-[#ccd6f6] p-2 w-[400px]' type='text' placeholder='Name' name='name' />
      <input className='my-4 p-2 bg-[#ccd6f6] w-[400px]' type='text' placeholder='Email' name='email' />
      <textarea className='bg-[#ccd6f6] h-400px  p-2' placeholder='Message' name='message'cols='30' rows='10 my-9'></textarea>

        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-3 w-[289px]  flex items-center justify-center rounded'>Lets Collaborate</button>
     </form>
    </div>
  )
}

export default Contact