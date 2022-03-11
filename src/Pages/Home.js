import React from 'react'
import { Link } from 'react-router-dom'
import style from './../Styles/main.module.css'

export default function Home() {
  return (
    <div className={style.MainContainer} >
      <div className={style.startdiv}> 
        <h1>BUILD YOUR RESUME THE SMART WAY.</h1>
        <p>Easily create an <Link to={'/'}>out of this world</Link> resume with expert content that can be customized just for you!</p>
        <Link to={'/Getstart'}>
        <button className={style.btn}>CREATE MY RESUME</button>
        </Link>
      </div>
    </div>
  )
}