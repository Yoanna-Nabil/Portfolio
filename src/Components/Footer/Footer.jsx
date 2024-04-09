import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <>
        <footer className='bg-dark text-center text-white overflow-hidden pt-5'>
            <div className="row gy-3 py-5">
                <div className="col-md-4">
                    <div className="location">
                        <h2 className='text-uppercase'>location</h2>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <h2 className='text-uppercase'>around the web</h2>
                    <div className="icons d-flex justify-content-around align-items-center w-50 mx-auto">
                        <div className={`${style.icon}`}><i className="fa-brands fa-facebook"></i></div>
                        <div className={`${style.icon}`}><i className="fa-brands fa-twitter"></i></div>
                        <div className={`${style.icon}`}><i className="fa-brands fa-linkedin"></i></div>
                        <div className={`${style.icon}`}><i className="fa-solid fa-globe"></i></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="freelancer">
                        <h2 className='text-uppercase'>ABOUT FREELANCER</h2>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
            <div className="copyright bg-black py-4">
                <p className='m-0'>Copyright © Your Website 2021</p>
            </div>
        </footer>
    </>
  )
}
