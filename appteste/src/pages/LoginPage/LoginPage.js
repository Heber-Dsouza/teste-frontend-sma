import React, {useContext} from 'react'
import styled from "@emotion/styled"

import { GlobalStateContext } from '../../global/context/GlobalStateContext'

import GridForLogin from '../../components/Grids/GridForLogin/GridForLogin'

const ScreenContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
const MainContainer = styled.div`
  /* border: 1px solid black; */
  margin: 40px auto;
  width: 80%;
  max-width: 1200px; 
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoginPage = () => {

  const { allUsers } = useContext(GlobalStateContext)


  return (
    <ScreenContainer>
      <MainContainer>
        <GridForLogin
          usersData={allUsers}
        />
      </MainContainer>
    </ScreenContainer>
  )
}

export default LoginPage