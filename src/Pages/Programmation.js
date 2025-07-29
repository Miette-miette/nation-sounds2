import React, { useEffect, useState,  createContext, useMemo} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { formatDate, formatTime } from "../utils/date";

const FilterContext = createContext();

const Programmation = () =>{

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [programmation, setProgrammation]= useState([])

    const iconScene ={
        "Euphorie":"../../media/scene/euphorie.png",
        "Fusion":"../../media/scene/fusion.png",
        "Reverie":"../../media/scene/fusion.png",
        "Patio":"../../media/scene/le patio.png",
        "Prisme":"../../media/scene/prisme.png",
        "Resonance":"../../media/scene/resonance.png",
    }
    
    const baseURL = process.env.REACT_APP_BASE_URL;
    const endpoint = '/api/event';

    useEffect(() => {
      axios.get(`${baseURL}${endpoint}`)
      .then((res) => {
        setProgrammation(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur API :", err);
        setError("Impossible de récupérer les données.");
        setLoading(false);
      });
  }, []);

    //FILTRES

    const [filters, setFilters] = useState({
        jour:"Tous",
        heure:"14:00",
        lieu:"Tous",
        type:"Tous"
    })

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }))}
    console.log(filters);
    

    const filteredProg = useMemo(() => {
        return programmation.filter((prog) => {
        const jourOk =
            filters.jour === "Tous" || prog.date.startsWith(filters.jour);

        const lieuOk =
            filters.lieu === "Tous" ||
            prog.location.name
            .toLowerCase()
            .includes(filters.lieu.toLowerCase());

        const heureOk =
            !filters.heure ||
            !prog.begin_time ||
            prog.begin_time >= filters.heure;

        const typeOk =
            filters.type === "Tous" ||
            (prog.type && prog.type.toLowerCase() === filters.type.toLowerCase());

        return jourOk && lieuOk && heureOk && typeOk;
        });
    }, [programmation, filters]);


        console.log(filteredProg);
        
    // GESTION DES DIFFERENTS STATES

    if (loading) {
        return (
        <main id="main" className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
            <div className="spinner" />
        </main>
        );
    }

    if (error) {
        return (
        <main id="main" className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
            <p className="text-danger">{error}</p>
            <button className="button-style mt-3" onClick={() => window.location.reload()}>
            Réessayer
            </button>
        </main>
        );
    }


    return(
        <main id="main">
            <div id="progHeader" className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-row justify-content-center align-items-center">
                <img src="../../media/doodle/etoile.png" className="decoTitre" />
                <h1>Programmation</h1>
                <img src="../../media/doodle/etoile.png" className="decoTitre" />
            </div>

            <p>Retrouvez la programmation complète de Nation Sounds Festival !</p>

            {/* FILTRES */}
            <div className="progBtn d-flex flex-column">
                <div id="filtreTitre" className="d-flex flex-row justify-content-center">
                    <h2>Filtres</h2>
                    <img src="../../media/icon/suivant.png" alt="flèche d'interaction" className="voirPlus d-flex d-md-none"/>
                </div>

            <div id="filtreBtn" className="d-flex flex-column flex-md-row flex-md-wrap justify-content-center justify-content-md-around align-items-center">
               
                {/* FILTRES TEMPORELS */}
                <div id="filtreTemporel" className="d-flex flex-column justify-content-center align-items-center">
                    <div className="filtreConteneur flex-column ">
                        <label htmlFor="jour">Jour</label>
                        <select
                        id="jour"
                        name="jour"
                        className="button-style"
                        onChange={handleFilterChange}
                        value={filters.jour}
                        >
                        <option value="Tous">Tous</option>
                        <option value="2024-07-26">Vendredi 26/07</option>
                        <option value="2024-07-27">Samedi 27/07</option>
                        <option value="2024-07-28">Dimanche 28/07</option>
                        </select>
                    </div>

                <div className="filtreConteneur flex-column">
                    <label htmlFor="heure">Horaire (à partir de)</label>
                    <input
                    type="time"
                    name="heure"
                    id="heure"
                    value={filters.heure}
                    onChange={handleFilterChange}
                    />
                </div>
                </div>

                {/* FILTRES DIVERS */}
                <div id="filtreAutre" className="d-flex flex-column justify-content-center align-items-center">
                    <div className="filtreConteneur flex-column">
                        <label htmlFor="lieu">Lieu</label>
                        <select
                        id="lieu"
                        name="lieu"
                        className="button-style"
                        onChange={handleFilterChange}
                        value={filters.lieu}
                        >
                        <option value="Tous">Tous</option>
                        <option value="Euphorie">Scène Euphorie</option>
                        <option value="Fusion">Scène Fusion</option>
                        <option value="Reverie">Scène Reverie</option>
                        <option value="Resonance">Scène Resonance</option>
                        <option value="Prisme">Scène Prisme</option>
                        <option value="Le Patio">Le Patio</option>
                        </select>
                    </div>

                    <div className="filtreConteneur flex-column">
                        <label htmlFor="type">Type d'évènement</label>
                        <select
                        id="type"
                        name="type"
                        className="button-style"
                        onChange={handleFilterChange}
                        value={filters.type}
                        >
                        <option value="Tous">Tous</option>
                        <option value="concert">Concert</option>
                        <option value="performance">Performance</option>
                        <option value="atelier">Atelier</option>
                        </select>
                    </div>
                </div>
            </div>
            </div>
        </div>

        <FilterContext.Provider value={{ filters, handleFilterChange }}>
            <div
            id="progConteneur"
            className="d-flex flex-row flex-wrap justify-content-center"
            >
            {filteredProg.length === 0 && <p>Aucun résultat</p>}

            {filteredProg.map((prog) => {
                const sceneName = prog.location.name || "";
                const sceneIcon = iconScene[sceneName] || "";
                return (
                <Link to={`/artiste/${prog.artist.id}`}
                    key={prog.id}
                    className="progItem d-flex flex-column"
                    style={{backgroundImage: `url(${baseUrl}${prog.artist.imgUrl})`}}>
                    <div className="conteneurImg d-flex flex-row justify-content-end align-items-start">
                        <img className="iconScene d-flex justify-content-end align-items-end" src={sceneIcon} alt="icon scène"/>
                    </div>

                    <div className="progTxt">
                        <h3 className="title">{prog.artist.name}</h3>
                        <p className="scene">
                            Lieu: <strong>{sceneName}</strong>
                        </p>
                        <p className="date">
                            <strong>{formatDate(prog.date)}</strong>
                        </p>
                        <p className="heure">{formatTime(prog.begin_time)}</p>
                    </div>
                </Link>
                );
            })}
            </div>
        </FilterContext.Provider>
    </main>
    )
}
export default Programmation;