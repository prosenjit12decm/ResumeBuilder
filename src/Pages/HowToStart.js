import React from 'react'
import { Link } from 'react-router-dom'
import style from './../Styles/main.module.css'


export default function HowToStart() {
  return (
    <div className={style.startmain}>
      <div className={style.heading}>How do you want to start?</div>
      <div className={style.startbox}>
        <div className={style.startleftpart}>
          <div>logo</div>
          <h5>Create New Resume</h5>
          <p>We will help you create a resume step-by-step.</p>
          <Link to={'/content'} >
            <button className={style.headerdiv}>
              START FRESH
            </button>
          </Link>
        </div>
        <hr />
        <div className={style.startrightpart}>
          <div>logo</div>
          <h5>I already have a resume</h5>
          <p>We'll re-format it and fill in your information so you don't have to do it</p>
          <button className={style.lastbtn}>UPLOAD RESUME</button>
        </div>
      </div>
    </div>
  )
}
