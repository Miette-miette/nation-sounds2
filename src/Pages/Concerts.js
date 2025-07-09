import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { formatTime } from "../utils/date";

const scene = [
  { key: "Euphorie",  label: "EUPHORIE",  icon: "../../media/scene/euphorie.png" },
  { key: "Fusion",    label: "FUSION",    icon: "../../media/scene/fusion.png" },
  { key: "Reverie",   label: "REVERIE",   icon: "../../media/scene/reverie.png" },
  { key: "Resonance", label: "RESONANCE", icon: "../../media/scene/resonance.png" },
  { key: "Prisme",    label: "PRISME",    icon: "../../media/scene/prisme.png" },
];

const days = [
  { date: "2024-07-26", label: "VEN 26/07" },
  { date: "2024-07-27", label: "SAM 27/07" },
  { date: "2024-07-28", label: "DIM 28/07" },
];

const baseUrl = "http://127.0.0.1:8000";
const endpoint  = "/api/event";

// Affichage scènes

const SceneSection = ({ scene, concerts }) => {

  if (concerts.length === 0) return (
    <article className="sceneConteneur d-flex flex-column justify-content-center">
      <p>Pas de concerts prévus sur cette date</p>
    </article>
    
  ); 

  return (
    <article className="sceneConteneur d-flex flex-column justify-content-center">
      <div className="sceneHeader d-flex flex-row justify-content-center align-items-center">
        <img src={scene.icon} width="80" alt={scene.label} />
        <h2>{scene.label}</h2>
      </div>

      {concerts.map((c) => (
        <div className="concertItem" key={`${c.artist.name}-${c.begin_time}`}>
          <img className="src" src={`${baseUrl}${c.artist.imgUrl}`}width="100" height="100" alt={c.artist.name}/>
          <div>
            <h3 className="title d-flex justify-content-start">{c.artist.name}</h3>
            <p className="heure">{formatTime(c.begin_time)} / {formatTime(c.end_time)}</p>
          </div>
        </div>
      ))}
    </article>
  );
};

const Concerts = () => {
  const [concerts, setConcerts] = useState([]);
  const [selectedDay, setSelectedDay] = useState(days[0].date);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}${endpoint}`)
      .then((res) => {
        setConcerts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Impossible de récupérer les concerts");
        setLoading(false);
      });
  }, []);

  const concertsByDay = useMemo(() => {
    return concerts.filter((c) => c.date.startsWith(selectedDay));
  }, [concerts, selectedDay]);

  
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

  return (
    <main>
    
      <div id="concertHeader" className="d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img src="../../media/doodle/cassette.png" className="decoTitreShake" />
          <h1>Concerts</h1>
          <img src="../../media/doodle/cassette.png" className="decoTitreShake" />
        </div>
        <p>Retrouvez la programmation des concerts par jour</p>

        <div className="sceneBtn d-flex flex-row justify-content-center">
          {days.map((d) => (
            <button key={d.date} id={d.date} className={`button-style ms-1 me-1 ${selectedDay === d.date ? "active" : ""}`} onClick={() => setSelectedDay(d.date)}>
              {d.label}
            </button>
          ))}
        </div>
      </div>

      <div id="scenes" className="d-flex flex-column flex-md-row flex-wrap justify-content-center align-items-center align-items-md-start">
        {scene.map((scene) => {
          const concertsForScene = concertsByDay.filter((c) => c.location.name.includes(scene.key));
          return <SceneSection key={scene.key} scene={scene} concerts={concertsForScene} />;
        })}
      </div>
    </main>
  );
};

export default Concerts;
