import Header from "../components/header";
import NavBar from "../components/navBar";
import News from "../components/news";

function Faves() {
    return ( 
        <section className="faves">
            <Header/>
            <NavBar/>
            <div className="faves-contBody">
                <News/>
            </div>
        </section>
     );
}

export default Faves;