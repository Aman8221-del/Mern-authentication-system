import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Default from './Default'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Default/>
  </StrictMode>,
)
