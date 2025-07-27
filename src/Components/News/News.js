import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const News = () => {
    const [data, setData]= useState([])

    const baseUrl = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
    });
    const endpoint = '/api/news';

    useEffect(() => {
        axios.get(baseUrl + endpoint)
        .then((res)=>setData(res.data))
    },[])
    console.log(data);
    
    return (
        <section id="news">
            <div className="d-flex flex-row justify-content-center align-items-center" >
                <img src="../../media/doodle/happyfleur2.png" className="decoTitre"/>
                <h2>Actualités du festival</h2>
                <img src="../../media/doodle/happyfleur2.png" className="decoTitre"/>
            </div>
            <div id="articleConteneur" className="d-flex flex-row" /*data-aos="fade-left" data-aos-duration="1000"*/>
                {
                    data.map((article)=>
                        <div className="articleCard d-flex flex-column" id={article.id} key={article.id}>
                            <div className="articleImg">
                                <img src={`http://127.0.0.1:8000${article.imgUrl}`}/>
                            </div>
                            <div className="articleDescription">
                                <h3 className="title">{article.title}</h3>
                                <p className="chapeau">{article.summary}</p>
                            </div>
                            <Link to={`/news/${article.id}`} className="button-style">Lire la suite</Link>
                        </div> 
                    )
                }
            </div>

        </section>
    )
}
export default News;
