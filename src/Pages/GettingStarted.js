import React from 'react'
import { Link } from 'react-router-dom';
import st from './../Styles/main.module.css';

export default function GettingStarted() {
  return (
    <div className={st.headdiv}>
      <div className={st.cont}>
        <p>3 SIMPLE STEPS</p>
        <h2>Getting Started</h2>
        <div>
          1.   Save time using pre-written bullets crafted by resume experts.
        </div>
        <div>
          2.  Select a recruiter approved template that will get your resume noticed.
        </div>
        <div>
          3. Download or print your new resume!
        </div>
        <Link to={'/HowToStart'}>
          <button>CONTINUE</button>
        </Link>
        <p className={st.lastline}>By clicking “Continue”, you agree to our <Link to={'#'}>Terms and Conditions </Link> and Privacy Policy.</p>
      </div>
    </div>
  )
}
