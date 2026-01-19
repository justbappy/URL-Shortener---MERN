import React from 'react'
import ContactForm from '../components/UI/ContactForm'

const Contact = () => {
  return (
    <div
    className='flex items-center'
    >
        <div
        className='hidden w-full h-fit lg:flex justify-center items-center'
        >
            <img src="images/contact.png" className="w-135" alt="" />
        </div>
        <div
        className='w-full flex flex-col items-center h-full mt-10 lg:m-0'
        >
            <h1 className="text-primary text-3xl font-semibold text-center mb-5">Contact Form</h1>
            <ContactForm/>
        </div>
    </div>
  )
}

export default Contact