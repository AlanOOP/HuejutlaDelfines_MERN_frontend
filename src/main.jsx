import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NotificationHandler from './NotificationHandler.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotificationHandler />
    <App />
  </React.StrictMode>,
)
