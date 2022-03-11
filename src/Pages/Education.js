import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './../Styles/workexp.module.css'
import { edaction } from '../Actions/Educationaction'

export default function Education() {
const {edureducer} = useSelector((state)=>state);
const dispatch = useDispatch();

const [form, setForm] = useState({
  schoolname : edureducer.schoolname,
  city : edureducer.city,
  country : edureducer.country,
  degree : edureducer.degree,
  graduationdate : edureducer.graduationdate

})

let obje ={}
function changekaro(e){
  let{name, value} = e.target
  setForm({
    ...form,
    [name] : value
  })
}


function afterclick(){
  obje.schoolname = form.schoolname;
  obje.city = form.city;
  obje.country = form.country;
  obje.degree = form.degree;
  obje.graduationdate = form.graduationdate

  dispatch(edaction(obje))
}



  return (
    <div className={style.headcontent}>
      <div className={style.childheader}>
        <h2>Education</h2>
        <p>Start with your most recent educational institution.</p>
      </div>
      <div className={style.nexchildheader}>
        <label>School Name</label>
        <input type='text' onChange={changekaro} name='schoolname' value={form.schoolname} />
        <span>
          <div>
            <label>City/Town</label>
            <input type='text' onChange={changekaro} name='city' value={form.city}/>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            <label>Country</label>
            <input type='text' onChange={changekaro} name='country' value={form.country}/>
          </div>
        </span>
        <label>Degree</label>
        <input type='text' onChange={changekaro} name='degree' value={form.degree}/>
        <span>
          <label>Graduation Date</label> &nbsp;&nbsp;&nbsp;&nbsp;
          <input type='date' placeholder='Enter your Grauation date' onChange={changekaro} name='graduationdate' value={form.graduationdate}/>
        </span>
        <Link to={'/addescription'}>+Add Description and select award</Link>
      </div>
      <Link to={'/skills'}>
        <button onClick={afterclick}>SAVE & CONTINUE</button>
      </Link>
      <Link to={'/workexp'}>
      <p style={{color:'red', fontSize:'25px'}}>back</p>
      </Link>
    </div>
  )
}
