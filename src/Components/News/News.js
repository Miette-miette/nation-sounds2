import React, { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
    const [data, setData]= useState([])

    useEffect(() => {
        axios.get("https://127.0.0.1:8000/index.php/api/articles")
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
                                <img src={`${article.image}`}/>
                            </div>
                            <div className="articleDescription">
                                <h3 className="title">{article.title}</h3>
                                <p className="chapeau">{article.chapeau}</p>
                            </div>
                        </div> 
                    )
                }
            </div>

        </section>
    )
}
export default News;
