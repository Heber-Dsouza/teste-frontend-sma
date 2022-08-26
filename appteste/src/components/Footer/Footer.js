import React from 'react'

import {
  MainContainer,
  CustomCreditsContainer,
  CreatedBy,
  CustomLinkContainer,
  CustomGitHubIcon
} from "./styled"

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