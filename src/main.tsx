import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App'

import './scss/styles.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename='/planets-facts'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
