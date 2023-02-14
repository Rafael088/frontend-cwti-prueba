import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../page/App';

function Router() {
   
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<></>} />
                    <Route exact path='/' element={<App/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
} 
export default Router