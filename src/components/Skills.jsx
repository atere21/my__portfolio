import React from 'react'
import css from '../assets/css.png'
import github from '../assets/github.png'
import firebase from '../assets/firebase.png'
import html from '../assets/html.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import javaScript from '../assets/javascript.png';
import mongo from '../assets/mongo.png';

function Skills() {
  return (
    <div name='skills' className=' bg-[#0a132f] text-gray-300 py-16 px-4 h-[full] py-[-8rem] '>
     {/* container */}
     <div className='max-w-[1000px] mx-auto p-4 flex-col justify-center w-full '>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-9'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={html} alt="html icon"/>
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={github} alt="html icon"/>
                <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={css} alt="html icon"/>
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={react} alt="react icon"/>
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={javaScript} alt="javascript icon"/>
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={tailwind} alt="tailwind icon"/>
                <p className='my-4'>TAILWIND</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={node} alt="node icon"/>
                <p className='my-4'>NODE JS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={firebase} alt="firebase icon"/>
                <p className='my-4'>FIREBASE</p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Skills