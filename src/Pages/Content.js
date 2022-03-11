import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './../Styles/main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { conaction } from '../Actions/Contentaction';
import { db } from '../firebase-config';
import { doc, getDoc, setDoc } from 'firebase/firestore';


export default function Main() {
    const { senddata } = useSelector((state) => {
        return state
    }
    );
    const { userRed } = useSelector(state => state)
    const { uid } = userRed
    const dispatch = useDispatch();
    const [user, setUser] = useState(userRed)
    const [val, setVal] = useState({
        name: senddata.name,
        email: senddata.email,
        streetAddress: senddata.streetAddress,
        city: senddata.city,
        country: senddata.country,
        phonenumber: senddata.phonenumber
    })

    function handlechange(e) {
        let { name, value } = e.target;
        setVal({
            ...val,
            [name]: value
        })
    }

    async function click() {
        try {
            dispatch(conaction(val))
            await setDoc(doc(db, "user", `${uid}`), {
                contact: val
            });
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className={css.content}>
            <div className={css.heading}>
                <h2>Tell us about yourself</h2>
                <p>With this info, recruiters will be able to find you.</p>
            </div>
            <div className={css.tag}>

                <label for>Name</label>
                <input type='text' name='name' onChange={handlechange} value={val.name} className={css.textbox} />

                <label for>Email</label>
                <span> <input type='email' name='email' onChange={handlechange} value={val.email} className={css.textbox} />
                    <input type='checkbox' className={css.checkingbox} /> Don't show on my Resume</span>
                <label for>Street Address</label>
                <input type='text' name='streetAddress' onChange={handlechange} value={val.streetAddress} className={css.textbox} />


                <label for>City</label>
                <input type='text' name='city' onChange={handlechange} value={val.city} className={css.textbox} />


                <label for>Country</label>
                <input type='text' name='country' onChange={handlechange} value={val.country} className={css.textbox} />

                <label for>Phone Number</label>
                <span>
                    <input type='text' name='phonenumber' onChange={handlechange} value={val.phonenumber} className={css.textbox} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to={'./addnumber'}> +Add another number</Link>
                </span>
                <Link to={'/workexp'}>
                    <button onClick={click}>SAVE & CONTINUE</button>
                </Link>
                <Link to={'/'}>
                    <p style={{ color: 'red', fontSize: '25px' }}>back</p>
                </Link>
            </div>

        </div>
    )
}
