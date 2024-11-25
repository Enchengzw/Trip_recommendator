import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { MyProvider } from './context.jsx';
import SearchBar from './searchbar.jsx';
import Map from './map.jsx';
import './index.css';

const App = () => (
  <MyProvider>
    <div className="wrapper">
      <SearchBar />
      <Map />
    </div>
  </MyProvider>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
