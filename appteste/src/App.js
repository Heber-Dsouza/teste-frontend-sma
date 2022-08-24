import React from 'react'

import { ThemeProvider } from '@mui/material/styles'
import theme from './constants/theme'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HomePage />
      <Footer />
    </ThemeProvider>
  )
}

export default App