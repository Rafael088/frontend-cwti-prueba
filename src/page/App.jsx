import Content from "../components/content";
import Filter from "../components/filter";
import Header from "../components/header";
import NavBar from "../components/navBar";

function App() {
    return ( 
        <section className="app">
            <Header/>
            <NavBar/>
            <Filter/>
            <Content/>
            <div className="app-buttons">
                <button>
                    View More
                </button>
            </div>
        </section>
     );
}

export default App;