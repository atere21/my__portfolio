import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-[#0a132f] flex justify-center items-center md:pt-[22rem] mt-[-10rem] '>
   <form
        method='post'
        action='https://getform.io/f/7db35b52-2504-4784-b131-ed5673e83177'
        className='flex flex-col max-w-full sm:max-w-[600px] shadow-lg shadow-[#40c16] group container rounded-md justify-center mx-auto contactForm'
      >
        <div className='my-8 mx-6 '>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 mt-4 text-xl'>Submit the form below or email tosinateret@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2 rounded-md my-2 mx-4' type='text' placeholder='Name' name='name' />
        <input className='p-2 bg-[#ccd6f6] rounded-md my-2 mx-4' type='text' placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] h-64 p-2 rounded-md my-2 mx-4 resize-none ' placeholder='Message' name='message' cols='30' rows='10'></textarea>

        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 mx-4 py-3 my-3 w-[200px] sm:w-[289px] flex items-center justify-center rounded'>
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
