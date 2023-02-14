import { AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";
function User() {
    return ( 
        <NavLink className="header-user" to="/login">
            <AiOutlineUser className="user-icon"/>
            <b>Tu cuenta</b>
        </NavLink>
     );
}

export default User;