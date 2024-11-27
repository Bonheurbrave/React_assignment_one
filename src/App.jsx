import React, { createContext, useContext, useState } from 'react'
import MovieComponent from './Components/MovieComponent'
import Navigation from './Components/Navigation'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'

export const Theme = createContext();

function App() {
  const [darktheme, setdarktheme] = useState(false)
  return (
    <div style={darktheme?{background:"black"}:{background:"white"}}>
      <Theme.Provider value={[darktheme , setdarktheme]}>
        <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <div>
              <Navigation />
              <Header />
              <MovieComponent />
              <Footer />
            </div>
          } />
          <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>
      </BrowserRouter>
        </div>
              </Theme.Provider>
    </div>
  )
}

export default App