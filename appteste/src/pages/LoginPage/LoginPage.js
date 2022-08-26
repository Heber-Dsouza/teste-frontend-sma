import React, {useContext} from 'react'
import styled from "@emotion/styled"

import { GlobalStateContext } from '../../global/context/GlobalStateContext'

import GridForLogin from '../../components/Grids/GridForLogin/GridForLogin'
import Loading from '../../components/Loading/Loading'
import ChangeIdea from './Texts/ChangeIdea'

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LoginPage = () => {

  const { allUsers, CURRENT_USERS_ID } = useContext(GlobalStateContext)


  return (
    <ScreenContainer>
      <MainContainer>
        {allUsers.length === 0 && <Loading />}
        {
          CURRENT_USERS_ID.length === 0 && allUsers.length !== 0 ? <ChangeIdea /> :
            <GridForLogin
              usersData={CURRENT_USERS_ID}
            />
        }
      </MainContainer>
    </ScreenContainer>
  )
}

export default LoginPage