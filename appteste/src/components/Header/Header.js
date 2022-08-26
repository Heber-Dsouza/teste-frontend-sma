import React, {useContext} from 'react'

import { GlobalStateContext } from '../../global/context/GlobalStateContext'

import LeftSide from './LeftSide/LeftSide'
import RightSide from './RightSide/RightSide'
import RighttSideLogged from './RightSideLogged/RightSideLogged';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';



const Header = () => {

  const { currentUserId, } = useContext(GlobalStateContext)

  return (
    <AppBar position={'fixed'}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LeftSide/>
          {currentUserId === null ? <RightSide /> : <RighttSideLogged />}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header