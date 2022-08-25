import React, {useContext} from 'react'
import styled from "@emotion/styled"

import { GlobalStateContext } from '../../global/context/GlobalStateContext';

import {primaryColor} from "../../constants/colors"
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom'
import { goToTodoPage } from "../../routes/coordinator"

import ColoredAvatar from '../ColoredAvatar/ColoredAvatar'

const MainContainer = styled(Button)`
  border: 1px solid ${primaryColor};
  padding: 0;
  border-radius: 0;
  /* width: 160px;
  height: 200px; */
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
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
    font-size: 1.5rem;
    font-weight: bolder;
  }
`
const UserCard = ({userData}) => {

  const { setCurrentUser } = useContext(GlobalStateContext)

  const navigate = useNavigate()

  const handleLogin = (id) => {
    setCurrentUser(id)
    goToTodoPage(navigate)
  }

  return (
    <MainContainer onClick={() => handleLogin(userData.id)}>
      <ImageContainer>
        <ColoredAvatar 
          avatarName={`${userData.username}`}
        />
      </ImageContainer>

      <NameContainer>
        <span>{`${userData.username}`}</span>
      </NameContainer>
    </MainContainer>
  )
}

export default UserCard