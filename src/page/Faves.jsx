import Header from "../components/header";
import NavBar from "../components/navBar";
import { useSelector } from "react-redux";
import News from "../components/news";
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addFavesAll } from "../services/factures/faves";
function Faves() {
    //declaration of variables
    const {faves} = useSelector(state => state.faves)
    const dispatch = useDispatch()
    //effect to load data from memory
    useEffect(() => {
        if (localStorage.getItem('favesItems')) {
            dispatch(addFavesAll(JSON.parse(localStorage.getItem('favesItems'))))
          }else{
            localStorage.setItem('favesItems',  JSON.stringify([]))
          }
    }, [dispatch])

    //funtion clear localstorage
    function changeClear() {
        
        dispatch(addFavesAll([]))
        localStorage.setItem('favesItems',  JSON.stringify([]))
    }
    return ( 
        <section className="faves">
            <Header/>
            <NavBar/>
            <b>{`${faves.length} Elements Favorites`}</b>
            <div className="faves-contBody">
                {faves.map(data => (
                    <News data={data} key={data.parent_id} />
                ))}
            </div>
            <div className="faves-contBtns">
                <button onClick={() => changeClear()}>
                    Limpiar
                </button>
            </div>
        </section>
     );
}

export default Faves;