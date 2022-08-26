import React from 'react'

import { 
  ScreenContainer,
  MainContainer 
} from "./styled"

import WallPaper from "../../assets/imgs/inBuild2.jpg"

const InBuildPage = () => {
  return (
    <ScreenContainer>
      <MainContainer>
        <img src={WallPaper} alt="Em construção" />
        <div>
          <span>Desculpe, esta página ainda está em desenvolvimento.</span> <br />
          <span>Volte em breve!</span>
        </div>
      </MainContainer>
    </ScreenContainer>
  )
}

export default InBuildPage