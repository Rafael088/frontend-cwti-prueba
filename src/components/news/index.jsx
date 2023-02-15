import {  AiFillHeart, AiOutlineClockCircle, AiOutlineHeart } from "react-icons/ai";
//AiOutlineHeart,
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function News({data}) {
    const [is, setIs] = useState(false);
    const {auth} = useSelector(state => state.auth)
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('favesItems')) {
            let list = JSON.parse(localStorage.getItem('favesItems'))
            list.forEach(element => {
                if (element.created_at_i === data.created_at_i) {
                    setIs(true)
                }
            });
        }
    }, [data])
    
    function getFav() {
        if (auth) {
            setIs(true)
            if (localStorage.getItem('favesItems')) {
                
                let list = JSON.parse(localStorage.getItem('favesItems'))
                if (list.length === 0) {
                    list.push(data) 
                    localStorage.setItem('favesItems', JSON.stringify(list))
                }else{
                    let temp = list.find(element => element.created_at_i === data.created_at_i)                    
                    if (temp) {
                        console.log("Esta Historia ya esta")
                    }else{
                        list.push(data)
                        localStorage.setItem('favesItems', JSON.stringify(list))
                    }

                }
                
            
                
            }else{
                localStorage.setItem('favesItems', JSON.stringify([data]))
            }
        }else{
            navigate('/login')
        }
        
    }
    return ( 
        <div className="body-news">
            <a className="news-contInfo" href={data.story_url?data.story_url:data.url} target="_blank" rel="noreferrer" >
                <b><AiOutlineClockCircle className="icon"/>{data.author}</b>
                <p>{data.story_title?data.story_title:data.title}</p>
            </a>
            <div className="news-contBtns">
                <button onClick={() => getFav()}>
                    {is?<AiFillHeart className="icon"/>:<AiOutlineHeart className="icon"></AiOutlineHeart>}
                </button>
            </div>
        </div>
     );
}

export default News;