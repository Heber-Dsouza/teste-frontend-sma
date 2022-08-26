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
      left: 6%;
      margin-top: 35px;
  }
  @media screen and (max-device-width : 700px) {
    /* width: 275px; */
    width: 58%;
  }
`
export const CustomGridChild = styled.div`
  /* background-color: red; */
  margin: 0.8vh 0.5vw 0 0;
`