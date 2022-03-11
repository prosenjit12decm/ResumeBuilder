import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './../Styles/workexp.module.css'
import { workexpaction } from '../Actions/Workexpaction'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

export default function WorkExperience() {

  const { workexpred } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { userRed } = useSelector(state => state)
  const { uid } = userRed

  const [form, setFrom] = useState({
    jobtitle: workexpred.jobtitle,
    company: workexpred.company,
    city: workexpred.city,
    country: workexpred.country,
    startdate: workexpred.startdate,
    enddate: workexpred.enddate,
    description: workexpred.description
  })
  let obj = {}
  function handlechange(e) {
    let { name, value } = e.target
    setFrom({
      ...form,
      [name]: value
    })
  }

  async function handleclick() {
    obj.jobtitle = form.jobtitle;
    obj.company = form.company;
    obj.city = form.city;
    obj.country = form.country;
    obj.startdate = form.startdate;
    obj.enddate = form.enddate;
    obj.description = form.description

    try {
      dispatch(workexpaction(obj))
      const docRef = doc(db, "user", `${uid}`);
      const docSnap = await getDoc(docRef);
      let userwork = docSnap.data()
      await setDoc(doc(db, "user", `${uid}`), {

        ...userwork, workexp: obj
      });

    } catch (err) {
      console.log(err.message)
    }
  }
  return (

    <div className={style.maincontainer}>
      <div className={style.heading}>
        <h2>Work Experience</h2>
        <p>Start with your most recent position.</p>
      </div>
      <div className={style.nextpart}>
        <div className={style.inputpart}>
          <label>Job Title</label>
          <input type='text' onChange={handlechange} name='jobtitle' value={form.jobtitle} />
          <label>Company</label>
          <input type='text' onChange={handlechange} name='company' value={form.company} />
          <label>City/Town</label>
          <input type='text' onChange={handlechange} name='city' value={form.city} />
          <label>Country</label>
          <input type='text' onChange={handlechange} name='country' value={form.country} />
          <label>Start Date</label>
          <span>
            <input type='date' onChange={handlechange} name='startdate' value={form.startdate} />
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type='date' /> */}
          </span>
          <label>End Date</label>
          <span>
            <input type='date' onChange={handlechange} name='enddate' value={form.enddate} />
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type='date' /> */}
          </span>
        </div>
        <br />
        <label>Enter Job Description</label><br />
        <textarea onChange={handlechange} name='description' value={form.description} />
        <Link to={'/education'}>
          <button onClick={handleclick}>CONTINUE</button>
        </Link>
        <Link to={'/content'}>
          <p style={{ color: 'red', fontSize: '25px' }}>back</p>
        </Link>
      </div>
    </div>


  )
}



