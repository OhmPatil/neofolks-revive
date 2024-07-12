import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "@fontsource/familjen-grotesk"
import "@fontsource/montserrat"
import "./fonts/MonumentExtended-Regular.otf"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './sections/Projects'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
)
