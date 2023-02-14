import { NavLink } from "react-router-dom";

function Login() {
    return ( 
        <section className="login">
            <div className="login-contBody">
                <form>
                    <h3>HACKER NEWS</h3>
                    <div className="contInputs">
                        <input type="email"/>
                        <input type="password"/>
                    </div>
                    <NavLink className="btn">Login</NavLink>
                    <NavLink to='/' className="btn back">Back</NavLink>
                </form>
            </div>
        </section>
     );
}

export default Login;