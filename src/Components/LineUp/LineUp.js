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
            .then((res) => {
                if (res.data && res.data.length > 0) {
                    setConcert(res.data);
                } else {
                    // fallback: données tests si API vide
                    setConcert([
                        {
                            id: 1,
                            artist: { id: 101, name: "Luna Waves", imgUrl: "/media/test/concert1.jpg" },
                            location: { name: "Grande Scène" },
                            date: "2025-09-10T21:00:00"
                        },
                        {
                            id: 2,
                            artist: { id: 102, name: "ElectroFox", imgUrl: "/media/test/concert2.jpg" },
                            location: { name: "Scène Électro" },
                            date: "2025-09-11T19:00:00"
                        },
                        {
                            id: 3,
                            artist: { id: 103, name: "The Frog Band", imgUrl: "/media/test/concert3.jpg" },
                            location: { name: "Petite Scène" },
                            date: "2025-09-12T18:00:00"
                        },
                        {
                            id: 4,
                            artist: { id: 104, name: "Miette & The Crumbs", imgUrl: "/media/test/concert4.jpg" },
                            location: { name: "Grande Scène" },
                            date: "2025-09-13T22:00:00"
                        },
                        {
                            id: 5,
                            artist: { id: 105, name: "Slime Symphony", imgUrl: "/media/test/concert5.jpg" },
                            location: { name: "Scène Harmonique" },
                            date: "2025-09-14T20:00:00"
                        },
                    ]);
                }
            })
            .catch((error) => {
                console.error("Erreur API :", error);
                // fallback en cas d'erreur API
                setConcert([
                    {
                        id: 1,
                        artist: { id: 101, name: "Luna Waves", imgUrl: "/media/test/concert1.jpg" },
                        location: { name: "Grande Scène" },
                        date: "2025-09-10T21:00:00"
                    },
                    {
                        id: 2,
                        artist: { id: 102, name: "ElectroFox", imgUrl: "/media/test/concert2.jpg" },
                        location: { name: "Scène Électro" },
                        date: "2025-09-11T19:00:00"
                    },
                    {
                        id: 3,
                        artist: { id: 103, name: "The Frog Band", imgUrl: "/media/test/concert3.jpg" },
                        location: { name: "Petite Scène" },
                        date: "2025-09-12T18:00:00"
                    },
                    {
                            id: 4,
                            artist: { id: 104, name: "Miette & The Crumbs", imgUrl: "/media/test/concert4.jpg" },
                            location: { name: "Grande Scène" },
                            date: "2025-09-13T22:00:00"
                        },
                        {
                            id: 5,
                            artist: { id: 105, name: "Slime Symphony", imgUrl: "/media/test/concert5.jpg" },
                            location: { name: "Scène Harmonique" },
                            date: "2025-09-14T20:00:00"
                        },

                ]);
            });
    }, []);

    return (
        <section id="affiche" className="d-flex flex-column justify-content-center align-items-center">
            <div className="wrapper-text">
                <div className="d-flex flex-row justify-content-center">
                    <img src="../../media/doodle/happyfleur1.png" className="decoTitre" alt="décoration"/>
                    <h2 className="d-flex align-items-center justify-content-center">Les concerts</h2>
                    <img src="../../media/doodle/happyfleur1.png" className="decoTitre" alt="décoration"/>
                </div>
                <p>Une édition haute en couleurs et en talents internationaux!</p>
            </div>
            

            

            <div id="carouselLineUp" className="carousel slide w-100" data-bs-ride="carousel">
                <div className="carousel-inner mb-2">
                    {concert.reduce((acc, item, index) => { 
                        if (index % 3 === 0) acc.push([]);
                        acc[acc.length - 1].push(item);
                        return acc;
                    }, []).map((group, id) => (
                        <div key={id} className={`carousel-item ${id === 0 ? "active" : ""}`}>
                            <div className="d-flex flex-row justify-content-center">
                                {group.map((concertItem) => (
                                    <Link to={`/artiste/${concertItem.artist.id}`} key={concertItem.id} className="col-12 col-md-4 d-flex">
                                        <div className="carouselCard m-2 flex-fill d-flex align-items-end" style={{backgroundImage: `url(${apiURL}${concertItem.artist.imgUrl})`,backgroundSize: "cover",backgroundPosition: "center"}}>
                                            <div className="infoCard">
                                                <h3 className="h2">{concertItem.artist.name}</h3>
                                                <p>{concertItem.location.name ?? 'Nom inconnu'}</p>
                                                <p>{formatDate(concertItem.date)}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <a className="carousel-control-prev" data-bs-target="#carouselLineUp" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next" data-bs-target="#carouselLineUp" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>
        </section>
    );
};

export default LineUp;

