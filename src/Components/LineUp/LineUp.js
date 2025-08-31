import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { formatDate } from "../../utils/date";
import './lineup.css';

const LineUp = () => {
    const [concert, setConcert] = useState([]);

    const baseURL = process.env.REACT_APP_BASE_URL;
    const apiURL = process.env.REACT_APP_API_URL; 
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

            <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="cards-wrapper">
                        {(concert || []).map((concertItem, index) => (
                            <div key={concertItem.id} className="carousel-item">
                                <Link to={`/artiste/${concertItem.artist.id}`} className="d-block w-100" style={{ backgroundImage: `url(${apiURL}${concertItem.artist.imgUrl})` }}>
                                    <div className="infoCard">
                                        <h3 className="title">{concertItem.artist.name}</h3>
                                        <p className="scene">{concertItem.location.name ?? 'Nom inconnu'}</p>
                                        <p className="date">{formatDate(concertItem.date)}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    
                </div>

                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>


        </section>
    );
};

export default LineUp;
