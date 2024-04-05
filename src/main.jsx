import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import IdInput from './IdInput.jsx'
import './assets/css/main.css'

import { Router, BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes basename="future-file.vercel.app">
      {/* Routes for the app */}
      <Route path="/" element={<IdInput />}/>
      <Route path="/:id" element={<App />}/>
    </Routes>
  </BrowserRouter>
)
