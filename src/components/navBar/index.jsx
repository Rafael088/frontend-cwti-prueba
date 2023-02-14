import { NavLink } from "react-router-dom";
function NavBar() {
    return ( 
        <div className="app-navbar">
            <NavLink className="navbar-btn" to='/'>
                <p>All</p>
            </NavLink>
            <NavLink className="navbar-btn" to='/faves'>
                <p>My faves</p>
            </NavLink>
        </div>
     );
}

export default NavBar;