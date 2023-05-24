import React from 'react'
import ReactDOM from 'react-dom/client'
import HeadLine from './HeadLine.jsx'
import Carousel from './Carousel.jsx'
import FassionLine from './FassionLine.jsx'
import AccsLine from './AccsLine.jsx'
import DigitalLine from './DigitalLine.jsx'
import BottomLine from './BottomLine.jsx'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeadLine />
    <Carousel />
    <FassionLine />
    <AccsLine />
    <DigitalLine />
    <BottomLine />
  </React.StrictMode>,
)
