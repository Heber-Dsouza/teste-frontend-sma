import React from 'react'
import styled from "@emotion/styled"

import GitHubIcon from '@mui/icons-material/GitHub';

const MainContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.6vh;
`
const CustomCreditsContainer = styled.span`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
const CreatedBy = styled.span`
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const CustomLinkContainer = styled.a`
  display: flex;
  color: inherit;
  align-items: flex-end;
  justify-content: center;
  text-decoration: none;
    :hover{
      text-decoration: underline;
      cursor: pointer;
    }
`
const CustomGitHubIcon = styled(GitHubIcon)`
  width: 15px;
  margin-right: 1px;
  position: relative;
  top: 2px;
`

const Footer = () => {
  return (
    <MainContainer>
      <CustomCreditsContainer>
        <CreatedBy>
          Criado por:
        </CreatedBy>
        <CustomLinkContainer href='https://github.com/Heber-Dsouza' target={'_blank'}>
          {<CustomGitHubIcon />}Heber-Dsouza
        </CustomLinkContainer>
      </CustomCreditsContainer>
    </MainContainer>
  )
}

export default Footer