import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './news.css';
import { motion } from "motion/react";

const News = () => {
    const [news, setNews]= useState([])

    const baseURL = process.env.REACT_APP_BASE_URL;
    const apiURL = process.env.REACT_APP_API_URL;
    const endpoint = '/api/news';

    useEffect(() => {
        axios.get(`${baseURL}${endpoint}`)
        .then((res)=>setNews(res.data))
    },[])
   
    return (
        <section id="news">
            <div className="d-flex flex-row justify-content-center align-items-center" >
                <img src="../../media/doodle/happyfleur2.png" className="decoTitre"/>
                <h2>Actualités du festival</h2>
                <img src="../../media/doodle/happyfleur2.png" className="decoTitre"/>
            </div>

             <div id="carouselNews" className="carousel slide w-100" data-bs-ride="carousel">
                <div className="carousel-inner mb-2">
                    {news.reduce((articles, item, index) => { 
                        if (index % 3 === 0) articles.push([]);
                        articles[articles.length - 1].push(item);
                        return articles;
                    }, []).map((group, id) => (
                        <div key={id} className={`carousel-item ${id === 0 ? "active" : ""}`}>
                            <div className="d-flex flex-row justify-content-center">
                                {group.map((article) => (
                                    <motion.div 
                                        className="articleCard card d-flex flex-column col-12 col-md-4" 
                                        id={article.id} 
                                        key={article.id}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{duration: 0.8, delay: index * 0.2, ease: [0, 0.71, 0.2, 1.01]}}>
                                        <div className="articleImg">
                                            <img src={`${apiURL}${article.imgUrl}`}/>
                                        </div>
                                        <div className="articleDescription">
                                            <h3 className="title">{article.title}</h3>
                                            <p className="chapeau">{article.summary}</p>
                                        </div>
                                        <Link to={`/news/${article.id}`} className="button-style">Lire la suite</Link>
                                    </motion.div> 
                                ))}
                            </div>
                        </div>
                     ))}
                </div>
            
                <a className="carousel-control-prev" data-bs-target="#carouselNews" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next" data-bs-target="#carouselNews" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>

        </section>
    )
}
export default News;
