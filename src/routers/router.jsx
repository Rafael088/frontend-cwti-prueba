import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Faves from '../page/Faves';
import Login from '../page/Login';
import React, { useEffect } from 'react';
import App from '../page/App';
import Loading from '../page/Loaidng';
function Router() {
   useEffect(() => {
     
   }, [])
   
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<></>} />
                    <Route exact path='/' element={<Loading/>}/>
                    <Route exact path='/home' element={<App/>}/>
                    <Route exact path='/faves' element={<Faves/>}/>
                    <Route exact path='/login' element={<Login/>}/>
                    <Route exact path='/login/:name' element={<Loading/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
} 
export default Router