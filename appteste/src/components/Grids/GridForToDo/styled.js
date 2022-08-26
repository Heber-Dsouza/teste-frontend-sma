import styled from '@emotion/styled'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const CustomBox = styled(Box)`
    @media screen and (max-device-width : 900px) {
    width: 292px;
    display: flex;
    justify-content: center;
  }
`
export const CustomGrid = styled(Grid)`

  @media screen and (min-device-width : 701px) {
      position: relative;
      left: 4%;
      margin-top: 35px;
  }
  @media screen and (max-device-width : 700px) {
    /* width: 275px; */
    width: 66%;
  }
`
export const CustomGridChild = styled.div`
  /* background-color: red; */
  margin: 0.8vh 0.5vw 0 0;
`
export const CustomCard = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  background-color: ${props => props.cor ? "lightgreen" : "pink"};
    p{
      font-size: 15px;
      padding: 8px;
    }
`