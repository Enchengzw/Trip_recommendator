import React, { useContext, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MyContext } from './context.jsx';

const Map = () => {
  const { query } = useContext(MyContext);
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    if (query) { 
      let data = query.response.candidates[0].content.parts[0].text.split(',');
      let name = data[0];
      let lat = parseFloat(data[1].replace(/[^0-9.-]/g, ''));
      let lon = parseFloat(data[2].replace(/[^0-9.-]/g, ''));
      mapRef.current.setView([lat, lon], 13);
      L.marker([lat, lon]).addTo(mapRef.current).bindPopup(name).openPopup();
   } 
  }, [query]);

  return (
    <div
      id="map"
      style={{ height: '100%', width: '100%', position: 'relative', zIndex: 0 }}
    ></div>
  );
};

export default Map;
