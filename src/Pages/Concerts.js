import React, { useEffect, useState } from "react";
import axios from "axios";

const Concerts = () =>{
    
    const [concerts, setConcert]= useState([])

    const baseUrl = 'http://127.0.0.1:8000'; // sans le slash final
    const endpoint = '/api/event';

    useEffect(() => {
        axios.get(baseUrl + endpoint)
        .then((res)=>setConcert(res.data))
    },[])


    // SETUP DES BOUTONS
    const btn= [
        {
            date:"2024-07-26",
            idJour:"VEN 26/07"
        },
        {
            date:"2024-07-27",
            idJour:"SAM 27/07"
        },
        {
            date:"2024-07-28",
            idJour:"DIM 28/08"
        },
    ]

    const [selectedBtn, setSelectedBtn] = useState("2024-07-26")
    const jourData= Object.values(btn)
    
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
                    { jourData.map((data) => 
                        <div>
                            <button id={data.date} name="inputJour" className="button-style" onClick={(e) => setSelectedBtn(e.target.id)} >
                                {data.idJour}
                            </button>
                           
                        </div>
                    )}
                </div>
            </div>

            <div id="scenes" className="d-flex flex-column flex-md-row flex-wrap justify-content-center align-items-center align-items-md-start">
            
                <article className="sceneConteneur d-flex flex-column justify-content-center">
                    <div className="sceneHeader d-flex flex-row justify-content-center align-items-center">
                        <img src="../../media/scene/euphorie.png" width="80px"/>
                        <h2>EUPHORIE</h2>
                    </div> 

                    <div id="euphorie">
                    {concerts
                        .map((euphorie)=> 
                        {
                            const location = euphorie.location.name
                            if(euphorie.date.includes(selectedBtn) && location.includes("Euphorie"))
                            {
                                return (
                                    <div className="concertItem" key={euphorie.artist.name}>
                                        <img className="src" src={euphorie.imageName} width="100px" height="100px"/>
                                        <div>
                                            <h3 className="title d-flex justify-content-start" >{euphorie.artist.name}</h3>
                                            <p className="date">{euphorie.date}</p>
                                            <p className="heure">{euphorie.begin_time}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }        
                    </div> 
                </article>

                <article className="sceneConteneur">
                    <div className="sceneHeader d-flex flex-row justify-content-center align-items-center">
                        <img src="../../media/scene/fusion.png" width="80"/>
                        <h2>FUSION</h2>
                    </div>

                    <div id="fusion">
                    {concerts
                        .map((fusion)=> 
                        {
                            const location = fusion.location.name
                            if(fusion.date.includes(selectedBtn) && location.includes("Fusion"))
                            {
                                return (
                                    <div className="concertItem" key={fusion.artist.name}>
                                        <img className="src" src={fusion.imageName} width="100px" height="100px"/>
                                        <div>
                                            <h3 className="title d-flex justify-content-start" >{fusion.artist.name}</h3>
                                            <p className="date">{fusion.date}</p>
                                            <p className="heure">{fusion.begin_time}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    </div>
                </article>

                <article className="sceneConteneur">
                    <div className="sceneHeader d-flex flex-row justify-content-center align-items-center">
                        <img src="../../media/scene/reverie.png" width="80"/>
                        <h2>REVERIE</h2>
                    </div>

                    <div id="reverie">
                    {concerts
                        .map((reverie)=> 
                        {
                            const location = reverie.location.name
                            if(reverie.date.includes(selectedBtn) && location.includes("Reverie"))
                            {
                                return (
                                    <div className="concertItem" key={reverie.artist.name}>
                                        <img className="src" src={reverie.imageName} width="100px" height="100px"/>
                                        <div>
                                            <h3 className="title d-flex justify-content-start" >{reverie.artist.name}</h3>
                                            <p className="date">{reverie.date}</p>
                                            <p className="heure">{reverie.begin_time}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    </div>
                </article>

                <article className="sceneConteneur">
                    <div className="sceneHeader d-flex flex-row justify-content-center align-items-center">
                        <img src="../../media/scene/resonance.png" width="80"/>
                        <h2>RESONANCE</h2>
                    </div>

                    <div id="resonance">
                    {concerts
                        .map((resonance)=> 
                        {
                            const location = resonance.location.name
                            if(resonance.date.includes(selectedBtn) && location.includes("Resonnance"))
                            {
                                return (
                                    <div className="concertItem" key={resonance.artist.name}>
                                        <img className="src" src={resonance.imageName} width="100px" height="100px"/>
                                        <div>
                                            <h3 className="title d-flex justify-content-start" >{resonance.artist.name}</h3>
                                            <p className="date">{resonance.date}</p>
                                            <p className="heure">{resonance.begin_time}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    </div>

                </article>

                <article className="sceneConteneur">
                    <div className="sceneHeader d-flex flex-row justify-content-center align-items-center">
                        <img src="../../media/scene/prisme.png" width="80"/>
                        <h2>PRISME</h2>
                    </div>

                    <div id="prisme">
                    {concerts
                        .map((prisme)=> 
                        {
                            const location = prisme.location.name
                            if(prisme.date.includes(selectedBtn) && location.includes("Prisme"))
                            {
                                return (
                                    <div className="concertItem" key={prisme.artist.name}>
                                        <img className="src" src={prisme.imageName} width="100px" height="100px"/>
                                        <div>
                                            <h3 className="title d-flex justify-content-start" >{prisme.artist.name}</h3>
                                            <p className="date">{prisme.date}</p>
                                            <p className="heure">{prisme.begin_time}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    </div>

                </article>
            </div>
        </main>
    )
}
export default Concerts;