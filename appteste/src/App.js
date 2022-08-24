import React from 'react'

import { ThemeProvider } from '@mui/material/styles'
import theme from './constants/theme'

import Router from './routes/Router'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  )
}

export default App