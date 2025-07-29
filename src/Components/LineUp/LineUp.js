import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { formatDate, formatTime } from "../../utils/date";

const LineUp = () => {
    const [concert, setConcert]= useState([])

    const baseUrl = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
    });
    const endpoint = '/api/event';

    useEffect(() => {
        baseUrl.get(endpoint)
        .then((res)=>setConcert(res.data))
    },[])
    console.log(concert);

    return(
        <section id="affiche" className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-row justify-content-center">
                <img src="../../media/doodle/happyfleur1.png" className="decoTitre"/>
                <h2 className="d-flex align-items-center justify-content-center">Les concerts</h2>
                <img src="../../media/doodle/happyfleur1.png" className="decoTitre"/>
            </div>

            <p>Une édition haute en couleurs et en talents internationaux!</p>
                
            <div id="carouselArtiste" >
                <div id="conteneurCarousel" className="d-flex flex-row" dataAos="fade-left" dataAosDuration="1000">
                {
                    (concert || []).map((concert)=>
                       
                        <Link to={`/artiste/${concert.artist.id}`} className="carouselCard" style={{backgroundImage: `url(${baseUrl}${concert.artist.imgUrl})`}}>
                            <div className="infoCard">
                                <h3 className="title">{concert.artist.name}</h3>
                                <p className="scene">{concert.location.name}</p>
                                <p className="date">{formatDate(concert.date)}</p>
                            </div>
                        </Link>
                    )
                }   
                </div>                       
            </div>
        </section>
    )
}
export default LineUp;

