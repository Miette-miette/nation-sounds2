import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { formatDate } from "../../utils/date";

const LineUp = () => {
    const [concert, setConcert] = useState([]);

    const baseURL = process.env.REACT_APP_BASE_URL; 
    const endpoint = '/api/event';

    useEffect(() => {
        axios.get(`${baseURL}${endpoint}`)
            .then((res) => setConcert(res.data))
            .catch((error) => console.error("Erreur API :", error));
    }, []);

    return (
        <section id="affiche" className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-row justify-content-center">
                <img src="../../media/doodle/happyfleur1.png" className="decoTitre" alt="décoration"/>
                <h2 className="d-flex align-items-center justify-content-center">Les concerts</h2>
                <img src="../../media/doodle/happyfleur1.png" className="decoTitre" alt="décoration"/>
            </div>

            <p>Une édition haute en couleurs et en talents internationaux!</p>

            <div id="carouselArtiste">
                <div id="conteneurCarousel" className="d-flex flex-row" data-aos="fade-left" data-aos-duration="1000">
                    {(concert || []).map((concertItem) => (
                        <Link 
                            key={concertItem.id} 
                            to={`/artiste/${concertItem.artist.id}`} 
                            className="carouselCard" 
                            style={{ backgroundImage: `url(${baseURL}${concertItem.artist.imgUrl})` }}
                        >
                            <div className="infoCard">
                                <h3 className="title">{concertItem.artist.name}</h3>
                                <p className="scene">{concertItem.location.name ?? 'Nom inconnu'}</p>
                                <p className="date">{formatDate(concertItem.date)}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LineUp;
