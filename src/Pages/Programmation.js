import React, { useEffect, useState } from "react";
import axios from "axios";

const Programmation = () =>{
    const [programmation, setProgrammation]= useState([])

    const iconScene ={
        "Euphorie":"../../media/scene/euphorie.png",
        "Fusion":"../../media/scene/fusion.png",
        "Reverie":"../../media/scene/fusion.png",
        "Patio":"../../media/scene/le patio.png",
        "Prisme":"../../media/scene/prisme.png",
        "Resonance":"../../media/scene/resonance.png",
    }
    
    useEffect(() => {
        axios.get("https://127.0.0.1:8000/index.php/api/programmation")
        .then((res) => setProgrammation(res.data))
    },[])

    const performance= programmation[0];
    const concert= programmation[1];
    const atelier= programmation[2];

    console.log(concert);
    

    return(
        <main id="mainProg">
            <div id="progHeader" className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img src="../../media/doodle/etoile.png" className="decoTitre"/>
                    <h1>Programmation</h1>
                    <img src="../../media/doodle/etoile.png" className="decoTitre"/>
                </div>
                
                <p>Retrouvez la programmation complete de Nation Sounds Festival!</p>
                

                <div className="progBtn d-flex flex-column">
                    
                    <div id="filtreTitre" className="d-flex flex-row justify-content-center">
                        <h2>Filtres</h2>
                        <img src="../../media/icon/suivant.png"  alt="fleche d'interaction"  className="voirPlus d-flex d-md-none"/>
                    </div>
                    

                    <div id="filtreBtn" className="d-flex flex-column flex-md-row flex-md-wrap justify-content-center justify-content-md-around align-items-center">

                        <div id="filtreTemporel" className="d-flex flex-column justify-content-center align-items-center">
                            <div className="filtreConteneur flex-column ">
                            <label for="jour">Jour</label>
                                <select id="jour" name="jour" className="button-style">
                                    <option>Tous</option>
                                    <option value="Vendredi">Vendredi 26/07</option>
                                    <option value="Samedi">Samedi 27/07</option>
                                    <option value="Dimanche">Dimanche 28/07</option>
                                </select>
                            </div>

                            <div className="filtreConteneur flex-column">
                                <label for="heure">Horaire (à partir de)</label>
                                <input type="time" name="heure" id="heure" value="14:00"/>
                            </div>
                        </div>
                        
                        <div id="filtreAutre" className="d-flex flex-column justify-content-center align-items-center">
                            <div className="filtreConteneur flex-column">
                                <label for="lieu">Lieu</label>
                                <select id="lieu" name="lieu" className="button-style">
                                    <option>Tous</option>
                                    <option value="Euphorie" id="Euphorie">Scène Euphorie</option>
                                    <option value="Fusion" id="Fusion">Scène Fusion</option>
                                    <option value="Reverie" id="Reverie">Scène Reverie</option>
                                    <option value="Resonance" id="Resonance">Scène Resonance</option>
                                    <option value="Prisme" id="Prisme">Scène Prisme</option>
                                    <option value="Patio" id="Patio">Le Patio</option>
                                </select>
                            </div>
                            <div className="filtreConteneur flex-column">
                                <label for="type">Type d'évènement</label>
                                <select id="type" name="type" className="button-style">
                                    <option>Tous</option>
                                    <option value="concert">Concert</option>
                                    <option value="performance">Performance</option>
                                    <option value="atelier">Atelier</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="progConteneur" className="d-flex flex-row flex-wrap justify-content-center"> 
                {
                    programmation.map((prog)=>
                        prog.map((prog) =>
                     
                            <div className="progItem d-flex flex-column" id="%id%" style={{backgroundImage: `url(${prog.titre})`}}>
                                <div className="conteneurImg d-flex flex-row justify-content-end align-items-start">
                                    <img className="iconScene d-flex justify-content-end align-items-end" src="%iconS%"/>
                                </div>
                                
                                <div className="progTxt">
                                    <h3 className="title">{prog.titre}</h3>
                                    <p className="scene">Lieu: <strong>{prog.scene}</strong></p>
                                    <p className="date"><strong>{prog.beginDateTime}</strong></p>
                                    <p className="heure">{prog.beginDateTime}</p>
                                </div>                    
                            </div>
                        )
                    )  
                }
            </div>

        </main>
    )
}
export default Programmation;