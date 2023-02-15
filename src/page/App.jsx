import Content from "../components/content";
import Filter from "../components/filter";
import Header from "../components/header";
import NavBar from "../components/navBar";
import React, { useState, useLayoutEffect } from 'react';

import { addFilter } from '../services/factures/filter';
import { useDispatch } from 'react-redux';
function App() {
    //declaration of variables
    const [count, setCount] = useState(8);
    const [page, setPage] = useState(0);
    const dispatch = useDispatch()
    //function to change pages
    function changeCount() {
        if (count === 16) {
            setPage(page + 1)
            setCount(8)
        }else{
            setCount(count + 8)
        }
    }
    //back to page function
    function changeCountBack() {
        setPage(page - 1)
        setCount(8)
    }
    //effect to load data from memory
    useLayoutEffect(() => {
        if (localStorage.getItem('valueFilter')) {
            dispatch(addFilter(localStorage.getItem('valueFilter')))
        }
    }, [dispatch])
    
    return (
            <section className="app">
                <Header/>
                <NavBar/>
                <Filter/>
                <Content page={page} count={count}/>
                <div className="app-buttons">
                    {page>0?
                    <button onClick={() => changeCountBack()} id="back">
                        Back Page
                    </button>:<></>
                    }
                    <button onClick={() => changeCount()}>
                        {count=== 16?"Next Page":"View More"}
                    </button>
                </div>
            </section>
     );
}

export default App;