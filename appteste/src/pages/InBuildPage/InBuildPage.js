import React from 'react'
import styled from '@emotion/styled'

import WallPaper from "../../assets/imgs/inBuild2.jpg"

const ScreenContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

    img{
      width: 40%;
      margin-top: 8px;
    }
    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }
    span{
      font-size: 18px;
      line-height: 8px;
    }
`

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