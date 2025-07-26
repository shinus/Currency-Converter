import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// main.jsx or index.jsx or main.js
import './index.css';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
