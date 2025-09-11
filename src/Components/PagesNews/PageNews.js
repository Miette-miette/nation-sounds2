import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './page-news.css';
import BackButton from "../BackButton/BackButton";

const PageNews = () => {
    const {id} = useParams();
    const [news, setNews] = useState(null);

    const baseURL = process.env.REACT_APP_BASE_URL;
    const endpoint = '/api/news';

    useEffect(() => {
        axios.get(`${baseURL}${endpoint}/${id}`)
            .then((res) => setNews(res.data))
            .catch((err) => console.error(err));
    }, [id]);

    console.log(news);
    

    if (!news) return <p>Chargement en cours !</p>

    return (
        <main>

            <BackButton/>
           
            <section className="d-flex flex-column justify-content-center align-items-center wrapper-beige artist-info m-md-5">
                <div className="article-img d-flex flex-column justify-content-center">
                    <img src={`https://api.nsfestival2024.online${news.imgUrl}`} alt={news.title} width="200px" height="200px"/>  
                </div> 
                
                <div className="d-flex flex-column article-text p-4">
                    <h1>{news.title}</h1>
                    <p>{news.content}</p>
                </div>
            </section>
            <section className="cta-prog d-flex flex-column flex-md-row justify-content-center">
                <Link to="/programmation" className="button-style d-flex flex-row justify-content-center">
                    <img src="../media/doodle/cassette.png" width="30px" alt="cassette"/>
                    Découvrir la programmation
                </Link>
                <Link to='https://www.ticketmaster.fr/fr' className="button-style d-flex flex-row justify-content-center" target="_blank" rel="noreferrer">
                    <img src="../media/doodle/happyfleur2" width="30px" alt="fleur"/>
                    Réserver mes billets
                </Link>
            </section>
        </main>
        
    )
}

export default PageNews