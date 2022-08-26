import React from 'react'
import styled from "@emotion/styled"

import { primaryColor } from "../../constants/colors"

import Create from "../../assets/Docs/Create.png"
import Read from "../../assets/Docs/Read.png"
import Update from "../../assets/Docs/Update.png"
import Delete from "../../assets/Docs/Delete.png"

const ScreenContainer = styled.div`
  flex-grow: 1;
`
const TitleContainer = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`
const TitleBox = styled.div`
  width: 40%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-device-width : 700px) {
    width: 90%;
  }
`
const CustomSpan1 = styled.span`
  font-size: 1.3rem;
  font-weight: bolder;
`
const CustomSpan2 = styled.span`
  text-align: center;
  margin: 3px;
`
const GalleryContainer = styled.div`
    /* height: 1000px; */
    height: 150vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const PhotoBox = styled.div`
  border: 1px solid ${primaryColor};
  width: 80%;
  height: 95%;
  display: flex;
  flex-direction: column;
`
const PhotoContainerX = styled.div`
  border: 1px solid ${primaryColor};
  /* flex-grow: 1; */
  height: 50%;
  display: flex;
`
const PhotoContainerY = styled.div`
  border: 1px solid ${primaryColor};
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
    img{
      border: 1px solid black;
      max-width: 100%;
      margin-bottom: 15px;
    }
    span {
      text-align: center;
    }
`

const HomePage = () => {
  return (
    <ScreenContainer>

      <TitleContainer>
        <TitleBox>
          <CustomSpan1>Bem-Vindo!</CustomSpan1>
          <CustomSpan2>
            Abaixo uma pequena explicação das principais funcionalidades apresentados no projeto em relação aos dados de usuário.
          </CustomSpan2>

        </TitleBox>
      </TitleContainer>

      <GalleryContainer>
        <PhotoBox>

          <PhotoContainerX>
            <PhotoContainerY>
              <img src={Create}/>
              <span>Entre na página de cadastro para criar sua conta de usuário.</span>
              <span style={{ "color": "red", "fontSize": "14px" }}>Obs.: No momento só é possível criar um usuário</span>
            </PhotoContainerY>
            <PhotoContainerY>
              <img src={Read}/>
              <span>Na página de login você pode entrar em uma conta já registrada.</span>
            </PhotoContainerY>
          </PhotoContainerX>

          <PhotoContainerX>
            <PhotoContainerY>
              <img src={Update} />
              <span>Após concluir a etapa de cadastro ou login, acesse a página Meu Perfil para mudar seus dados</span>
              <span style={{ "color": "red", "fontSize": "14px" }} >Obs.: A api não possui um endpoint de atualizar dados, mas é possível usar a interface de edição de dados do usuário.</span>
            </PhotoContainerY>
            <PhotoContainerY>
              <img src={Delete} />
              <span>Para apagar um usuário da memória basta clicar no ícone de X no canto superior esquerdo.</span>
            </PhotoContainerY>
          </PhotoContainerX>

        </PhotoBox>
        
      </GalleryContainer>

    </ScreenContainer>
  )
}

export default HomePage