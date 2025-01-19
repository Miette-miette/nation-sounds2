import React, { useEffect, useState } from "react";
import axios from "axios";

const LineUp = () => {
    const [concert, setConcert]= useState([])

    useEffect(() => {
        axios.get("https://127.0.0.1:8000/index.php/api/concerts")
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
                <div id="conteneurCarousel" className="d-flex flex-row" /*data-aos="fade-left" data-aos-duration="1000"*/>
                {
                    concert.map((concert)=>
                        <div className="carouselCard" style={{backgroundImage: `url(${concert.imageName})`}}>
                            <div class="infoCard">
                                <h3 class="title">{concert.titre}</h3>
                                <p class="scene">%scene%</p>
                                <p class="date">{concert.beginDateTime}</p>
                            </div>
                        </div>
                    )
                }   
                </div>                       
            </div>
        </section>
    )
}
export default LineUp;

