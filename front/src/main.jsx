import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SearchBar from './searchbar'
import Map from './map'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="wrapper">
      <SearchBar />
      <Map />
    </div>
  </StrictMode>,
)
