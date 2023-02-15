import User from "../users";

function Header() {
    //header and user
    return ( 
        <header className="app-header">
                <h1>HACKER NEWS</h1>
                <User/>
        </header>
     );
}

export default Header;