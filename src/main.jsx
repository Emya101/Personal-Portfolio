import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom' //Allows link to work with react-router-dom
import { ThemeProvider } from "./context/ThemeContext"; //Allows user to access Theme Context

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
)
