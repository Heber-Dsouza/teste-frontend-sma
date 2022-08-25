import React from 'react';
import styled from '@emotion/styled'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import UserCard from '../../UserCard/UserCard';

const CustomBox = styled(Box)`
    @media screen and (max-device-width : 900px) {
    width: 292px;
    display: flex;
    justify-content: center;
  }
`
const CustomGrid = styled(Grid)`

  @media screen and (min-device-width : 701px) {
      position: relative;
      left: 5.4%;
  }
  @media screen and (max-device-width : 700px) {
    /* width: 275px; */
    width: 80%;
  }
`

const GridForLogin = ({child}) => {
  return (
    <CustomBox sx={{ flexGrow: 1 }}>
      <CustomGrid container spacing={1} justifyContent={"flex-start"} alignItems="center" columns={{ xs: 3, sm: 4, md: 14 }}>
        {/* <Grid item xs={12} md={2.5}>
          {child}
        </Grid> */}
        <Grid item xs={12} md={2.5}>
          <UserCard />
        </Grid>
        <Grid item xs={12} md={2.5}>
          <UserCard />
        </Grid>
        <Grid item xs={12} md={2.5}>
          <UserCard />
        </Grid>
        <Grid item xs={12} md={2.5}>
          <UserCard />
        </Grid>
        <Grid item xs={12} md={2.5}>
          <UserCard />
        </Grid>
        <Grid item xs={12} md={2.5}>
          <UserCard />
        </Grid>
        <Grid item xs={12} md={2.5}>
          <UserCard />
        </Grid>
      </CustomGrid>
    </CustomBox>
  )
}

export default GridForLogin