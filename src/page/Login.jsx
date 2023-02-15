import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import { addData } from "../services/factures/auth";
import { useDispatch } from "react-redux";
function Login() {
    //declaration of variables
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm();
    const [err, setErr] = useState('');
    const dispatch = useDispatch()

    //funtion login is a test
    function login(db) {
        if (db.name === "Rafael") {
            if (db.password === "cwti2023") {
                dispatch(addData(db))
                localStorage.setItem('auth', JSON.stringify(db))
                navigate(`/login/${db.name}`)
            }else{
                setErr('Name user invalidate')
            }
        }else{
            setErr('Name user invalidate')
        }
    }
    return ( 
        <section className="login">
            <div className="login-contBody">
                <form onSubmit={handleSubmit(login)}>
                    <h3>HACKER NEWS</h3>
                    <p>{err}</p>
                    <div className="contInputs">
                        <input type="text"
                        placeholder='Name User'
                        {...register('name',
                        {required:true
                        })}/>
                        <input type="password"
                        placeholder='Password'
                        {...register('password',
                        {required:true
                        })}/>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <NavLink to='/home' className="btn back">Back</NavLink>
                </form>
            </div>
        </section>
     );
}

export default Login;