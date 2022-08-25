import React from 'react'
import styled from "@emotion/styled"

import ColoredAvatar from '../ColoredAvatar/ColoredAvatar'

const MainContainer = styled.div`
  border: 1px solid green;
  width: 160px;
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
  flex-wrap: wrap;
  padding: 4px;
  span {
    font-size: 1.5rem;
    font-weight: bolder;
  }
`
const UserCard = () => {
  return (
    <MainContainer>
      <ImageContainer>
        <ColoredAvatar 
          avatarName={"Lourenço"}
        />
      </ImageContainer>

      <NameContainer>
        <span>{"Lourenço"}</span>
      </NameContainer>
    </MainContainer>
  )
}

export default UserCard