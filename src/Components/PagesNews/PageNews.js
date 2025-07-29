import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './page-news.css';
import BackButton from "../BackButton/BackButton";

const PageNews = () => {
    const {id} = useParams();
    const [news, setNews] = useState(null);

    const baseUrl = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
    }); 
    const endpoint = '/api/news';

    useEffect(() => {
        baseUrl.get(`${endpoint}/${id}`)
            .then((res) => setNews(res.data))
            .catch((err) => console.error(err));
    }, [id]);

    console.log(news);
    

    if (!news) return <p>Chargement en cours !</p>

    return (
        <main>

            <BackButton/>

            <section className="d-flex flex-column justify-content-center wrapper-beige m-5">
                <div className="artist-button d-flex flex-column ">
                    <img src={`${baseUrl}${news.imgUrl}`} alt={news.title} height="200"/>  
                </div> 
                
                <div className="d-flex flex-column article-text p-4">
                    <h1>{news.title}</h1>
                    <p>{news.content}</p>
                </div>
            </section>
            <section className="cta-prog d-flex flex-row justify-content-center">
                <Link to="/programmation" className="button-style">Découvrir la programmation</Link>
                <Link to='https://www.ticketmaster.fr/fr' className="button-style" target="_blank" rel="noreferrer">Reserver mes billets</Link>
            </section>
        </main>
        
    )
}

export default PageNews