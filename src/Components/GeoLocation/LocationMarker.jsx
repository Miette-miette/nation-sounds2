import { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

const userIcon = new L.Icon({
  iconUrl: '/media/icon/suivant.png', 
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function LocationMarker({ active }) {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    if (!active) return;
    if (!navigator.geolocation) {
      alert("La géolocalisation est désactivée !");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const latlng = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setPosition(latlng);
        map.flyTo(latlng, 17);
      },
      (err) => {
        alert("Échec de la géolocalisation.");
        console.error(err);
      }
    );
  }, [active, map]);

  return position ? (
    <Marker position={position} icon={userIcon}>
      <Popup>Vous êtes ici !</Popup>
    </Marker>
  ) : null;
}
