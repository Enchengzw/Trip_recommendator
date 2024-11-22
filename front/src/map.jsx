import React, { useEffect } from 'react';
import L from 'leaflet'; 
import 'leaflet/dist/leaflet.css';

const Map = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13); // Set initial position and zoom level

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map).bindPopup('Eres bobo').openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map" 
      style={{ height: '100%', 
               width: '100%',
               position: 'relative',
               zIndex: 0}} 
    ></div>
  );
};

export default Map;
