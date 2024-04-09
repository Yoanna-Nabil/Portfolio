import React from 'react'
import style from './Contact.module.css'

export default function Contact() {
  return (
    <section className={`${style.contact} py-5`}>
      <div className="container d-flex justify-content-center align-items-center flex-column h-100">
      <div className="header text-center mb-5">
        <h2 className='text-uppercase'>COntaCT SECTION</h2>
        <span className={`${style.star}`}><i className="fa-solid fa-star"></i></span>
        </div>
        <div className="form w-50 mx-auto mt-5">
          <input type="text" placeholder='userName' className={`${style.inputValid } w-100 rounded-3 p-3 mb-4 `}/>
          <input type="text" placeholder='userAge' className={`w-100 rounded-3 p-3 py-3 mb-4 ${style.inputValid }`}/>
          <input type="email" placeholder='userEmail' className={`w-100 rounded-3 p-3 py-3 mb-4 ${style.inputValid }`}/>
          <input type="password" placeholder='userPassword' className={`w-100 rounded-3 p-3 py-3 mb-4 ${style.inputValid }`}/>
          <button className={`btn-success btn text-white`}>Send Message</button>
        </div>
      </div>
    </section>
  )
}
