import React from 'react'
import img from '../../assets/images/avataaars.svg'
import style from './Home.module.css'

export default function Home() {
  return (
    <section className={` ${style.Home}  py-5 text-white  ${style.bgColor}`}>
      <div className="container d-flex justify-content-center align-items-center flex-column text-center">
        <div className="img mb-3">
          <img src={img} className='w-100' alt="home" />
        </div>
        <div className="text">
          <h1>START FRAMEWORK</h1>
          <span className={` ${style.star}    `}><i className="fa-solid fa-star"></i></span>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </section>
  )
}
