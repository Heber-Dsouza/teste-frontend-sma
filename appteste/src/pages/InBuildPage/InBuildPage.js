import React from 'react'

import { ScreenContainer } from "./styled"

import WallPaper from "../../assets/imgs/inBuild2.jpg"

const InBuildPage = () => {
  return (
    <ScreenContainer>
      <img src={WallPaper} alt="Em construção" />
      <div>
        <span>Desculpe, esta página ainda está em desenvolvimento.</span> <br />
        <span>Volte em breve!</span>
      </div>

    </ScreenContainer>
  )
}

export default InBuildPage