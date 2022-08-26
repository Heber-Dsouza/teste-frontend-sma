import React, {useContext} from 'react'

import { GlobalStateContext } from '../../global/context/GlobalStateContext';

import { useNavigate } from 'react-router-dom'
import { goToTodoPage } from "../../routes/coordinator"

import {
  MainContainer,
  CloseButton,
  CustomCloseIcon,
  ImageContainer,
  NameContainer
} from "./styled"

import ColoredAvatar from '../ColoredAvatar/ColoredAvatar'

const UserCard = ({ userData, handleClickOpen }) => {

  const { setCurrentUserId, deletingUserId } = useContext(GlobalStateContext)

  const navigate = useNavigate()

  const handleLogin = (id) => {
    setCurrentUserId(id)
    goToTodoPage(navigate)
  }

  const deleteAccount = (event, id) => {
    event.stopPropagation();
    // deletingUserId(id)
    handleClickOpen(id)
  }

  return (
      <MainContainer onClick={() => handleLogin(userData.id)}>
        <ImageContainer>
          <ColoredAvatar 
            avatarName={`${userData.username}`}
            />
          <CloseButton onClick={(event) => deleteAccount(event, userData.id)}>
            <CustomCloseIcon/>
          </CloseButton>
        </ImageContainer>

        <NameContainer>
          <span>{`${userData.username}`}</span>
        </NameContainer>
      </MainContainer>
  )
}

export default UserCard