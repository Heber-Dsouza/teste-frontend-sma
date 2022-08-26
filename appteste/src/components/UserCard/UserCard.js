import React, {useContext} from 'react'
import styled from "@emotion/styled"

import { GlobalStateContext } from '../../global/context/GlobalStateContext';

import {primaryColor} from "../../constants/colors"
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import { useNavigate } from 'react-router-dom'
import { goToTodoPage } from "../../routes/coordinator"

import ColoredAvatar from '../ColoredAvatar/ColoredAvatar'

const MainContainer = styled(Button)`
  border: 1px solid ${primaryColor};
  padding: 0;
  border-radius: 0;
  /* width: 160px;
  height: 200px; */
  min-width: 186px;
  height: 200px;
  display: flex;
  flex-direction: column;
`
const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid ${primaryColor};
  height: 20px;
  width: 20px;
  position: relative;
  bottom: 159px;
  left: 3px;
    :hover{
      height: 30px;
      width: 30px;
      color: red;
    }
`
const CustomCloseIcon = styled(CloseIcon)`
  width: 20px;
`
const ImageContainer = styled.div`
  width: 100%;
  flex-grow: 1;
`
const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  width: 85%;
  margin: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: horizontal;
  span {
    font-size: 1rem;
    font-weight: bolder;
  }
`
const UserCard = ({userData}) => {

  const { setCurrentUserId, deletingUserId } = useContext(GlobalStateContext)

  const navigate = useNavigate()

  const handleLogin = (id) => {
    setCurrentUserId(id)
    goToTodoPage(navigate)
  }

  const deleteAccount = (event, id) => {
    event.stopPropagation();
    deletingUserId(id)
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