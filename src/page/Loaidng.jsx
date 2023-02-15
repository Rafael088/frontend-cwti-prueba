import { BiLoaderCircle } from "react-icons/bi";
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
function Loading() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => navigate('/home'), 3000)
    }, [navigate])
    
    return ( 
        <section className="loading">
            <div className="loading-body">
                <b>Welcome to</b>
                <h1>HACKERS NEWS</h1>
                <p>Wait a moment please, we are preparing everything for you</p>
                <BiLoaderCircle className="icon"/>
            </div>  
        </section>
     );
}

export default Loading;