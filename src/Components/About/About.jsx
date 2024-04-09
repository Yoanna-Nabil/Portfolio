import React from 'react'
import style from './About.module.css'

export default function About() {
  return (
    <section className={`${style.About} ${style.bgColor} py-5 text-center d-flex justify-content-center align-items-center text-white`}>
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h2 className='text-uppercase'>about component</h2>
        <span className={`${style.star} text-white`}><i className="fa-solid fa-star"></i></span>
        <div className="row mt-3">
          <div className="col-md-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
