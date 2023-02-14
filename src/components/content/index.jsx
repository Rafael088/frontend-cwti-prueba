import News from "../news";
import React, { useState, useEffect } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { useSelector } from "react-redux";
function Content({count, page}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const {filter} = useSelector((state) => state.filter)
    useEffect(() => {
        getData(filter)
        async function getData(query) {
            setLoading(true)
            let url = `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}`
            await fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data.hits)
                setLoading(false)
                console.log(data.hits)
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
                        <News key={data.parent_id}  data={data}/>
                    ))}
                </>
            }
            
        </div>
     );
}

export default Content;