import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { formatDate } from "../../utils/date";
import './lineup.css';

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

            <div id="carouselArtiste" className="carousel slide" data-bs-ride="carousel">
                <div id="carousel-inner" className="d-flex flex-row">
                    {(concert || []).map((concertItem, index) => (
                        <div 
                            key={concertItem.id} 
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                        >
                            <Link 
                                to={`/artiste/${concertItem.artist.id}`} 
                                className="carouselCard d-flex align-items-end"
                                style={{ backgroundImage: `url(https://api.nsfestival2024.online${concertItem.artist.imgUrl})` }}
                            >
                                <div className="infoCard">
                                    <h3 className="title">{concertItem.artist.name}</h3>
                                    <p className="scene">{concertItem.location.name ?? 'Nom inconnu'}</p>
                                    <p className="date">{formatDate(concertItem.date)}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselArtiste" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Précédent</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselArtiste" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Suivant</span>
                </button>
            </div>

        </section>
    );
};

export default LineUp;
