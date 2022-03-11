import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../Styles/header.module.css'

export default function Header() {
    
    return (
        <>
            <div className={styles.logo}>
                <Link to="/">
                    <img src='./images/images/Resume.png'  width= "170px"/>
                </Link>
            </div>
            <div className={styles.contents}>
                <div style={{color:"black", fontWeight:'bolder' }}>
                    Resume Templates
                </div>
                <div style={{color:"black", fontWeight:'bolder' }}>
                    About Us
                </div>
                <div className={styles.signupbtn}>
                    <Link to='/signup' style={{ textDecoration: "none", color:"black" }}>
                        Register
                    </Link>
                </div>
                <div className={styles.loginbtn}>
                    <Link to='/login' style={{ textDecoration: "none" ,color:"black"}}>
                        Login
                    </Link>
                </div>
            </div>
        </>
    )
}
