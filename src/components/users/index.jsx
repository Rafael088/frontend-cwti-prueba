import { AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteData, addData } from "../../services/factures/auth";
import { useDispatch } from "react-redux";
import React, { useEffect } from 'react';

function User() {
    const {auth} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    function loget() {
        dispatch(deleteData())
        localStorage.removeItem('auth')
    }
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            dispatch(addData(JSON.parse(localStorage.getItem('auth'))))
        }
    }, [dispatch])
    
    return (
        <>
            {auth?
                <button className="header-user" onClick={() => loget()}>
                    <AiOutlineUser className="user-icon"/>
                    <b>{auth.name}</b>
                </button>:
                
                <NavLink className="header-user" to="/login">
                    <AiOutlineUser className="user-icon"/>
                    <b>Your account</b>
                </NavLink>
            }
        </>
     );
}

export default User;