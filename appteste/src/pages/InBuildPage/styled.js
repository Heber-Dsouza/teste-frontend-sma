import styled from '@emotion/styled'

export const ScreenContainer = styled.div`
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

    @media screen and (max-device-width : 700px) {
    margin-top: 100px;
    width: 58%;

      img{
        width: 90%;
        margin-top: 8px;
      }

      span{
      font-size: 18px;
      line-height: 8px;

    }
  }
`
export const MainContainer = styled.div`
  /* border: 1px solid black; */
  margin: 80px auto;
  width: 80%;
  max-width: 1200px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`