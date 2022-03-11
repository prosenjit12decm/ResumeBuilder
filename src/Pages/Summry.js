import React, { useState } from 'react'
import style from './../Styles/summry.module.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sumaction } from '../Actions/Summaryaction'

export default function Summry() {
  const {summred, senddata} = useSelector(state=>state)
  console.log(senddata,'onsummary page')
  
  const dispatch = useDispatch();

  const[ val, setVal] = useState({
    profsummary: summred.profsummary
  })
  let obj = {}
  function handlechange(e){
    let {name, value} = e.target
    setVal({
      ...val,
      [name] : value
    })
  }

  function clickhua(){
    obj.profsummary = val.profsummary

    dispatch(sumaction(obj))
  }
  return (
    <div className={style.maindiv}>
      <div className={style.childfirst}>
        <h2>Summary</h2>
        <p>Briefly describe the value that you bring through your skills, background and experience.</p>
      </div>
      <div className={style.childsecond}>
        <textarea style={{width:'100%', height:'100%'}} onChange={handlechange} name='profsummary' value={val.profsummary} />
      </div>
      <Link to={'/finalpage'}>
      <button onClick={clickhua}>SAVE & CONTINUE</button>
      </Link>
      <div>
        <Link to={'/skills'}>
        <p style={{color:'red', fontSize:'25px'}}>back</p>
        </Link>
      </div>
    </div>
  )
}
