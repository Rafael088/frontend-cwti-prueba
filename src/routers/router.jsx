import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../page/App';
import Faves from '../page/Faves';
import Login from '../page/Login';

function Router() {
   
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<></>} />
                    <Route exact path='/' element={<App/>}/>
                    <Route exact path='/faves' element={<Faves/>}/>
                    <Route exact path='/login' element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
} 
export default Router