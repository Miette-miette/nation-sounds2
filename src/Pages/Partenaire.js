import React, { useEffect, useState } from "react";
import axios from "axios";

const Partenaire = () =>{
    const [partenaire, setPartenaire]= useState([]);

    const baseUrl = 'http://127.0.0.1:8000'; 
    const endpoint = '/api/partner';

    useEffect(() => {
        axios.get(baseUrl + endpoint)
        .then((res)=>setPartenaire(res.data))
    },[]);
    console.log(partenaire);
    

    
    return(
        <main>
            <div id="partenaireHeader" className="d-flex flex-row justify-content-center align-items-center">
                <img src="../../media/doodle/metal.png" className="decoTitreShake"/>
                <h1>Nos partenaires</h1>
                <img src="../../media/doodle/metal.png" className="decoTitreShake"/>
            </div>

            <div className="conteneurPartenaire d-flex flex-column">
                <h2>Institutions</h2>
                <div id="institutionConteneur" className="d-flex flex-column">
                {
                    partenaire
                        .filter((partenaire)=> partenaire.type === "Institution")
                        .map((i)=>
                        <div className="imgPartenaireConteneur  d-flex flex-column flex-lg-row justify-content-center justify-content-md-between align-items-center ">
                            <img src={`${baseUrl}${i.imgUrl}`}/>
                            <div className="articleDescription d-flex flex-column justify-content-center">
                                <h2 className="title">{i.name}</h2>
                                <p className="description">{i.content}</p>
                            </div>
                        </div>                       
                    )   
                }
                </div>
            </div>

            <div class="conteneurPartenaire d-flex flex-column">
                <h2>Entreprises</h2>
                <div id="entrepriseConteneur" class="d-flex flex-column">
                {
                    partenaire
                    .filter((partenaire)=> partenaire.type === "Entreprise")
                    .map((e)=>
                        <div className="imgPartenaireConteneur  d-flex flex-column flex-lg-row justify-content-center justify-content-md-between align-items-center ">
                            <img src={`${baseUrl}${e.imgUrl}`}/>
                            <div className="articleDescription d-flex flex-column justify-content-center">
                                <h2 className="title">{e.name}</h2>
                                <p className="description">{e.content}</p>
                            </div>
                        </div>                       
                    )   
                }
                </div>
            </div>
        </main>
    )
}
export default Partenaire;