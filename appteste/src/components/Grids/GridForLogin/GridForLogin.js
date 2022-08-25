import React from 'react';
import styled from '@emotion/styled'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const CustomBox = styled(Box)`
    @media screen and (max-device-width : 900px) {
    width: 292px;
  }
`
const CustomGrid = styled(Grid)`
  position: relative;
  left: 5.4%;
  @media screen and (max-device-width : 700px) {
    width: 275px;
  }
`

const GridForLogin = ({child}) => {
  return (
    <CustomBox sx={{ flexGrow: 1 }}>
      <CustomGrid container spacing={1} justifyContent={"flex-start"} alignItems="center" columns={{ xs: 3, sm: 4, md: 14 }}>
        <Grid item xs={12} md={2.5}>
          {child}
        </Grid>
      </CustomGrid>
    </CustomBox>
  )
}

export default GridForLogin