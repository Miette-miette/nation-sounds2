import React, { useEffect, useState } from "react";
import axios from "axios";

const Concerts = () =>{
    const [concert, setConcert]= useState([])

    useEffect(() => {
        axios.get("https://127.0.0.1:8000/index.php/api/concerts")
        .then((res)=>setConcert(res.data))
    },[])
    
    return(
        <main>
           <div id="concertHeader" className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img src="../../media/doodle/cassette.png" className="decoTitreShake"/>
                    <h1>Concerts</h1>
                    <img src="../../media/doodle/cassette.png" className="decoTitreShake"/>
                </div>
                
                <p>Retrouvez la programmation des concerts par jour</p>

                <div className="sceneBtn d-flex flex-row justify-content-center">
                    <button id="vendredi" className="button-style d-flex justify-content-center align-items-center">VEN 26/07</button>
                    <button id="samedi"  className="button-style d-flex justify-content-center align-items-center" >SAM 27/07</button>
                    <button id="dimanche"  className="button-style d-flex justify-content-center align-items-center">DIM 28/07</button>
                </div>

            </div>
            <div id="scenes" className="d-flex flex-column flex-md-row flex-wrap justify-content-center align-items-center align-items-md-start">
                <article className="sceneConteneur d-flex flex-column justify-content-center">
                    <div className="sceneHeader d-flex flex-row justify-content-center align-items-center">
                        <img src="../../media/scene/euphorie.png" width="80px"/>
                        <h2>EUPHORIE</h2>
                    </div> 

                    <div id="euphorie">
                        {
                            concert
                            .filter((concert)=> concert.scene === "euphorie")
                            .map((concert) =>
                            <div className="concertItem  ">
                            <img className="src" src={concert.imageName} width="100px" height="100px"/>
                            <div>
                                <h3 className="title d-flex justify-content-start">{concert.titre}</h3>
                                <p className="date">{concert.beginDateTime}</p>
                                <p className="heure">{concert.beginDateTime}</p>
                            </div>
                            </div>
                            )
                        }
                        
                    </div>

                </article>

                <article className="sceneConteneur">
                    <div className="sceneHeader d-flex flex-row justify-content-center align-items-center">
                        <img src="../../media/scene/fusion.png" width="80"/>
                        <h2>FUSION</h2>
                    </div>

                    <div id="fusion">
                        {
                            concert
                            .filter((concert)=> concert.scene === "fusion")
                            .map((concert) =>
                            <div className="concertItem  ">
                                <img className="src" src={concert.imageName} width="100px" height="100px"/>
                                <div>
                                    <h3 className="title d-flex justify-content-start">{concert.titre}</h3>
                                    <p className="date">{concert.beginDateTime}</p>
                                    <p className="heure">{concert.beginDateTime}</p>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </article>

                <article className="sceneConteneur">
                    <div className="sceneHeader d-flex flex-row justify-content-center align-items-center">
                        <img src="../../media/scene/reverie.png" width="80"/>
                        <h2>REVERIE</h2>
                    </div>

                    <div id="reverie">
                        {
                            concert
                            .filter((concert)=> concert.scene === "reverie")
                            .map((concert) =>
                            <div className="concertItem">
                                <img className="src" src={concert.imageName} width="100px" height="100px"/>
                                <div>
                                    <h3 className="title d-flex justify-content-start">{concert.titre}</h3>
                                    <p className="date">{concert.beginDateTime}</p>
                                    <p className="heure">{concert.beginDateTime}</p>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </article>

                <article className="sceneConteneur">
                    <div className="sceneHeader d-flex flex-row justify-content-center align-items-center">
                        <img src="../../media/scene/resonance.png" width="80"/>
                        <h2>RESONANCE</h2>
                    </div>

                    <div id="resonance">
                        {
                            concert
                            .filter((concert)=> concert.scene === "resonnance")
                            .map((concert) =>
                            <div className="concertItem  ">
                                <img className="src" src={concert.imageName} width="100px" height="100px"/>
                                <div>
                                    <h3 className="title d-flex justify-content-start">{concert.titre}</h3>
                                    <p className="date">{concert.beginDateTime}</p>
                                    <p className="heure">{concert.beginDateTime}</p>
                                </div>
                            </div>
                            )
                        }
                    </div>

                </article>

                <article className="sceneConteneur">
                    <div className="sceneHeader d-flex flex-row justify-content-center align-items-center">
                        <img src="../../media/scene/prisme.png" width="80"/>
                        <h2>PRISME</h2>
                    </div>

                    <div id="prisme">
                        {
                            concert
                            .filter((concert)=> concert.scene === "prisme")
                            .map((concert) =>
                            <div className="concertItem  ">
                                <img className="src" src={concert.imageName} width="100px" height="100px"/>
                                <div>
                                    <h3 className="title d-flex justify-content-start">{concert.titre}</h3>
                                    <p className="date">{concert.beginDateTime}</p>
                                    <p className="heure">{concert.beginDateTime}</p>
                                </div>
                            </div>
                            )
                        }
                    </div>

                </article>
            </div>
        </main>
    )
}
export default Concerts;