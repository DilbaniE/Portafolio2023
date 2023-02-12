import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppPortafolio } from './AppPortafolio'
import { Header } from './components/Header'
import { AppRouter } from './routes/AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header/>
      <AppRouter/>

  </React.StrictMode>
)
