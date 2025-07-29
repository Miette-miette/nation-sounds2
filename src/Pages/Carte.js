import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, Popup, TileLayer, useMapEvents, Marker, LayersControl, LayerGroup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import LocationMarker from "../Components/GeoLocation/LocationMarker";
import { formatTime } from "../utils/date";

function createIcon(url) {
  return new L.Icon({
    iconUrl: url,
    iconRetinaUrl: url,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
    className: 'custom-icon',
  });
}

const Carte = () =>{
    const [carte, setCarte]= useState([]);
    const [marker, setMarker]= useState([]);
    const [geoActive, setGeoActive] = useState(false);
    const [selectedMarker, setSelectedMarker] = useState(null);


    const baseURL = process.env.REACT_APP_BASE_URL;
    const endpointMapSettings = '/api/map';
    const endpointMarker = '/api/marker';

    useEffect(() => {
        axios.get(baseURL + endpointMapSettings).then((res)=>setCarte(res.data));
        axios.get(baseURL + endpointMarker).then((res)=>setMarker(res.data));
    },[])

    console.log(carte);
    console.log(marker);
    
    return(
        <main>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <img src="../../media/doodle/forme-organique1.png" className="decoTitre"/>
                <h1>Carte du festival</h1>
                <img src="../../media/doodle/forme-organique1.png" className="decoTitre"/>
            </div>
            
            <div id="conteneurCarte" className="d-flex flex-column flex-md-row ">
                
                <div id="map">
                    {
                        carte.map((carte)=>
                         
                    <MapContainer center={[carte.lat, carte.lng]} zoom={15} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        
                        <LocationMarker position="bottomright" active={geoActive} />
                       
                        <LayersControl position="topright">

                            <LayersControl.Overlay checked name="Tous"> 
                                <LayerGroup>
                                    {
                                        marker.map((all) =>  
                                            <Marker key={all.id} position={[all.lat,all.lng]} icon={createIcon(`${baseURL}${all.imgUrl}`)}  eventHandlers={{click: () => setSelectedMarker(all)}}>
                                        
                                            </Marker>
                                    )}
                                </LayerGroup>   
                            </LayersControl.Overlay>
                                    
                            <LayersControl.Overlay name="Scènes">
                                <LayerGroup>
                                    {  
                                        marker.map((marker) => {
                                            if(marker.type === "scène"){ 
                                                return(
                                                    <Marker key={marker.id} position={[marker.lat,marker.lng]} icon={createIcon(`${baseURL}${marker.imgUrl}`)}  eventHandlers={{click: () => setSelectedMarker(marker)}}>
                                                    </Marker> 
                                            )}    
                                        })
                                    }
                                </LayerGroup>
                            </LayersControl.Overlay>

                            <LayersControl.Overlay name="Point d'informations">
                                <LayerGroup>
                                    {  
                                        marker.map((marker) => {
                                            if(marker.type === "information"){ 
                                                return(
                                                    <Marker key={marker.id} position={[marker.lat,marker.lng]} icon={createIcon(`${baseURL}${marker.imgUrl}`)} eventHandlers={{click: () => setSelectedMarker(marker)}}>
                                                    </Marker>
                                            )}  
                                        })
                                    }
                                </LayerGroup>
                            </LayersControl.Overlay>

                            <LayersControl.Overlay name="Restauration">
                                <LayerGroup>
                                    {  
                                        marker.map((marker) => {
                                            if(marker.type === "restauration"){ 
                                                return(
                                                    <Marker key={marker.id} position={[marker.lat,marker.lng]} icon={createIcon(`${baseURL}${marker.imgUrl}`)}  eventHandlers={{click: () => setSelectedMarker(marker)}}>
                                                    </Marker>
                                            )}  
                                        })
                                    }
                                </LayerGroup>
                            </LayersControl.Overlay>

                            <LayersControl.Overlay name="WC">
                                <LayerGroup>
                                    {  
                                        marker.map((marker) => {
                                            if(marker.type === "wc"){ 
                                                return(
                                                    <Marker key={marker.id} position={[marker.lat,marker.lng]} icon={createIcon(`${baseURL}${marker.imgUrl}`)}  eventHandlers={{click: () => setSelectedMarker(marker)}}>
                                                    </Marker>
                                            )}  
                                        })
                                    }
                                </LayerGroup>
                            </LayersControl.Overlay>
                        </LayersControl>
                    </MapContainer>
                   )}
                   
                </div>

                <div className="aside-map d-flex flex-column">
                        <button className="button-style h5 p-3" onClick={() => setGeoActive(true)}>
                            📍 Me localiser
                        </button>

                        <div id="conteneurInformations">
                            {!selectedMarker ? (
                                <p><em>Touchez la carte pour obtenir plus d'informations sur chaque lieu!</em></p>) : (
                                    <div className="mapInfo d-flex flex-column">
                                        <div className="carteInfoImg">
                                            <img src={`${baseURL}${selectedMarker.infoLocation.imgUrl}`} alt={selectedMarker.name} />
                                        </div>

                                    <div className="carteTxt d-flex flex-column justify-content-around align-items-center">
                                        <h2>{selectedMarker.name}</h2>
                                        <p>{selectedMarker.infoLocation.description}</p>

                                        {selectedMarker.type === "scène" && (
                                        <p>{selectedMarker.eventNow ? "🎵 Un événement est en cours !" 
                                        : "Pas d’événement pour l’instant."}</p>)}

                                        {selectedMarker.type === "restauration" && (
                                        <div>
                                            <h3 className="h4">Horaires d'ouverture</h3>
                                            <p>{formatTime(selectedMarker.infoLocation.opening)} / {formatTime(selectedMarker.infoLocation.closing)}</p>
                                        </div>
                                        )}
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
                


            </div>

            <div className="d-flex flex-column justify-content-center align-items-center" id="legend">
                <h2>Légende</h2>
                <div className=" container row ">
                    <div className="legendItem d-flex flex-row align-items-center col-6 col-md-4 col-lg-3">
                        <img src="../../media/scene/le patio.png" alt="logo Patio"/>
                        <p>Le Patio</p>
                    </div>

                    <div className="legendItem d-flex flex-row align-items-center col-6 col-md-4 col-lg-3">
                        <img src="../../media/scene/euphorie.png" alt="logo scène Euphorie"/>
                        <p>Scène Euphorie</p>
                    </div>
                    <div className="legendItem d-flex flex-row align-items-center col-6 col-md-4 col-lg-3">
                        <img src="../../media/scene/fusion.png"  alt="logo scène Fusion"/>
                        <p>Scène Fusion</p>
                    </div>
                    <div className="legendItem d-flex flex-row align-items-center col-6 col-md-4 col-lg-3">
                        <img src="../../media/scene/fusion.png" alt="logo scène Reverie"/>
                        <p>Scène Reverie</p>
                    </div>
                    <div className="legendItem d-flex flex-row align-items-center col-6 col-md-4 col-lg-3">
                        <img src="../../media/scene/resonance.png" alt="logo scène Resonance"/>
                        <p>Scène Resonance</p>
                    </div>
                    <div className="legendItem d-flex flex-row align-items-center col-6 col-md-4 col-lg-3">
                        <img src="../../media/scene/prisme.png" alt="logo scène Reverie"/>
                        <p>Scène Prisme</p>
                    </div>
                    <div className="legendItem d-flex flex-row align-items-center col-6 col-md-4 col-lg-3">
                        <img src="../../media/carte/entree.png" alt="logo Accueil"/>
                        <p>Accueil</p>
                    </div>
                    <div className="legendItem d-flex flex-row align-items-center col-6 col-md-4 col-lg-3">
                        <img src="../../media/carte/bar.png" alt="logo bar"/>
                        <p>Douceur Estivale</p>
                    </div>
                    <div className="legendItem d-flex flex-row align-items-center col-6 col-md-4 col-lg-3">
                        <img src="../../media/carte/burger.png" width="40" alt="logo burger"/>
                        <p>La Cabane</p>
                    </div>
                    <div className="legendItem d-flex flex-row align-items-center col-6 col-md-4 col-lg-3">
                        <img src="../../media/carte/friterie.png"alt="logo frite"/>
                        <p>Frite & Love</p>
                    </div>
                    <div className="legendItem d-flex flex-row align-items-center col-6 col-md-4 col-lg-3">
                        <img src="../../media/carte/wc.png" alt="logo wc"/>
                        <p>WC</p>
                    </div>
                </div>
            </div>
             
        </main>
    )
}
export default Carte;