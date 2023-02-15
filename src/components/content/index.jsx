import News from "../news";
import React, { useState, useLayoutEffect } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { useSelector } from "react-redux";
function Content({count, page}) {
    //declaration of variables
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    //get params filter to redux
    const {filter} = useSelector((state) => state.filter)
    //effect to get data from API
    useLayoutEffect(() => {
        getData(filter)
        async function getData(query) {
            setLoading(true)
            let url = `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}`
            await fetch(url)
            .then(res => res.json())
            .then(data => {
                //adding the information to the data state variable
                setData(data.hits)
                setLoading(false)
            })  
            .catch(err => console.log(err))
        }
    }, [filter, page])
    
    
    return ( 
        <div className="app-contBody">
            {loading?
                <>
                    <AiOutlineLoading3Quarters className="icon"/>
                </>:
                <>
                    {data.slice(0, count).map(data => (
                        <News key={data.story_id}  data={data}/>
                    ))}
                </>
            }
            
        </div>
     );
}

export default Content;