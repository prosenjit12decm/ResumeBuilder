import React,{useEffect, useState} from 'react'
import styles from '../Styles/login.module.css'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Provider, useSelector, useDispatch } from 'react-redux';
import {userform} from '../Actions/UserAction'


export default function Login() {
    const auth = getAuth();
    const dispatch = useDispatch();
    const [emailR, setEmailR] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    const {userRed} = useSelector(state=>state);
    console.log(userRed)
    const[uiddetail, setUiddetail] = useState({
        userRed
    }) 
    console.log(uiddetail)
    const navigate = useNavigate();

    async function handleSignin() {
        setLoading(true)
        try {
            let usercred = await signInWithEmailAndPassword(auth, emailR, password)
            console.log(usercred)
            setLoading(false)
            let user = usercred.user
            const {uid, email} = user
            setUiddetail({
                uid: uid,
                email: email
            })
            alert("Login Successfull")
            navigate('/')
        } catch (err) {
            console.log(err.message)
            alert('Login failed due to invalid email or password')
            setLoading(false)
        }
        
    }

    useEffect(()=>{
        dispatch(userform(uiddetail))
    },[uiddetail])

    return (
        <>
            {
                loading ? (<h1>Please Check your console</h1>) :
                    (
                        <div className={styles.loginmain}>
                            <div className={styles.loginfnt}>
                                <h2 className={styles.loginhead}>Enter Login details</h2>
                                <div className="input-group full">
                                    <label>Email</label>
                                    <div className="effect">
                                        <input type="text" name="email" value={emailR} onChange={(e)=>{setEmailR(e.target.value)}} />
                                    </div>
                                </div>
                                <div className="input-group full">
                                    <label>Password</label>
                                    <div className="effect">
                                        <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                                    </div>
                                </div>
                                <br />
                                <div className="form-buttons">
                                    <button className="btn hvr-float-shadow" onClick={handleSignin} type="button">Login</button>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    )
}
