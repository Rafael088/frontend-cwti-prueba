import { NavLink } from "react-router-dom";
function NavBar() {

    let params = window.location.pathname
    
    return ( 
        <div className="app-navbar">
            <NavLink className={params ==='/home'? "navbar-btn on":"navbar-btn"} to='/home'>
                <p>All</p>
            </NavLink>
            <NavLink className={params ==='/faves'? "navbar-btn on":"navbar-btn"} to='/faves'>
                <p>My faves</p>
            </NavLink>
        </div>
     );
}

export default NavBar;