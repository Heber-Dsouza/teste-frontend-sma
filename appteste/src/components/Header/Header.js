import React from 'react'

import LeftSide from './LeftSide/LeftSide'
import RightSide from './RightSide/RightSide'

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';



const Header = () => {

  
  
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LeftSide />
          <RightSide />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header