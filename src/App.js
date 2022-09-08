import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Container } from '@mui/material'

import ResponsiveAppBar from './components/navbar'
import Home from './components/home'
import Auth from './components/auth'

const App = () => {
  return (
    <Router>
      <Container>
        <ResponsiveAppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
