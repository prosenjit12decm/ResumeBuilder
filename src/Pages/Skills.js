import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { skillaction } from '../Actions/Skillsaction'
import style from './../Styles/skills.module.css'

export default function Skills() {
const {skillred} = useSelector(state=>state)
const dispatch = useDispatch();

const [val, setVal] = useState({
  skillf : skillred.skillf,
  skillse : skillred.skillse,
  skillt : skillred.skillt,
  skillfo : skillred.skillfo,
  skillfi : skillred.skillfi,
  skillsi : skillred.skillsi
})

let obj={}


function handlechange(e){
  let{name, value} = e.target
  setVal({
    ...val,
    [name] : value
  })
}

function click(){
  obj.skillf = val.skillf;
  obj.skillse = val.skillse;
  obj.skillt = val.skillt;
  obj.skillfo = val.skillfo;
  obj.skillfi = val.skillfi;
  obj.skillsi = val.skillsi;

  dispatch(skillaction(obj))
}
  return (
    <div className={style.headdiv}>
        <div>
            <h2>Skills</h2>
            <p>Add a few skills to show employers what you're good at.</p>
        </div>
        <div className={style.contentdiv}>
            {/* <div>Logo</div> */}
            <input type='text' placeholder='skills #1' onChange={handlechange} name='skillf' value={val.skillf} />
            <input type='text' placeholder='skills #2' onChange={handlechange} name='skillse' value={val.skillse} />
            <input type='text' placeholder='skills #3' onChange={handlechange} name='skillt' value={val.skillt} />
            <input type='text' placeholder='skills #4' onChange={handlechange} name='skillfo' value={val.skillfo} />
            <input type='text' placeholder='skills #5' onChange={handlechange} name='skillfi' value={val.skillfi} />
            <input type='text' placeholder='skills #6' onChange={handlechange} name='skillsi' value={val.skillsi} />
            <Link to={'/addline'}>
              +Add another line
            </Link>
            <br/>
            <Link to={'/summry'}>
            <button onClick={click}>SAVE & CONTINUE</button>
            </Link>
            <Link to={'/education'}>
            <p style={{color:'red', fontSize:'25px'}}>back</p>
            </Link>
        </div>
    </div>
  )
}
