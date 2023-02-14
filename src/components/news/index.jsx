import {  AiFillHeart, AiOutlineClockCircle } from "react-icons/ai";
//AiOutlineHeart,
function News({data}) {
    function getFav() {
        let listFav =  localStorage.getItem("myFavs")
        listFav.push(data)
    }
    return ( 
        <div className="body-news">
            <a className="news-contInfo" href={data.story_url} target="_blank" rel="noreferrer" >
                <b><AiOutlineClockCircle className="icon"/>{data.author}</b>
                <p>{data.story_title}</p>
            </a>
            <div className="news-contBtns">
                <button onClick={() => getFav()}>
                    <AiFillHeart className="icon"/>
                </button>
            </div>
        </div>
     );
}

export default News;