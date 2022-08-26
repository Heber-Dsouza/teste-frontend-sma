import React, {useContext, useState} from 'react'
import styled from "@emotion/styled"

import { GlobalStateContext } from '../../global/context/GlobalStateContext'

import GridForLogin from '../../components/Grids/GridForLogin/GridForLogin'
import Loading from '../../components/Loading/Loading'
import ChangeIdea from './Texts/ChangeIdea'
import DeleteDialog from '../../components/Dialogs/DeleteDialog/DeleteDialog'
import SnackNBar from '../../components/SnackNBar/SnackNBar'

import Button from '@mui/material/Button'
import { goToSignupPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'



const ScreenContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
const MainContainer = styled.div`
  /* border: 1px solid black; */
  margin: 80px auto;
  width: 80%;
  max-width: 1200px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const CustomButton = styled(Button)`
  margin-top: 35px;
`

const LoginPage = () => {

  const navigate = useNavigate()
  
  useUnprotectedPage()

  const { allUsers, CURRENT_USERS_ID, findUserData, deletingUserId } = useContext(GlobalStateContext)

  const [open, setOpen] = useState(false);
  const [currentUserData, setcurrentUserData] = useState({})

  const [openSB, setOpenSB] = useState(false);


  const handleClickOpen = (id) => {
    setOpen(true);
    setcurrentUserData(findUserData(id))
  };

  const handleClose = (response) => {
  
    if(response){
      deletingUserId(currentUserData.id)
      setOpenSB(true)
    }
    setOpen(false)
  };


  return (
    <ScreenContainer>
      <MainContainer>
        {allUsers.length === 0 && <Loading />}
        {
          CURRENT_USERS_ID.length === 0 && allUsers.length !== 0 ? <ChangeIdea /> :
            <GridForLogin
              usersData={CURRENT_USERS_ID}
              handleClickOpen={handleClickOpen}
            />
        }
        <CustomButton variant="outlined" onClick={() => goToSignupPage(navigate)}>Cadastrar-se</CustomButton>
        <DeleteDialog
          open={open}
          handleClose={handleClose}
          currentUserData={currentUserData}
        />
      </MainContainer>
      <SnackNBar 
        message={`Usuário(a) ${currentUserData.username} deletado(a)`}
        openSB={openSB}
        setOpenSB={setOpenSB}
      />
    </ScreenContainer>
  )
}

export default LoginPage