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
`