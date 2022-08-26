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
      margin-top: 35px;
  }
  @media screen and (max-device-width : 700px) {
    /* width: 275px; */
    width: 58%;
  }
`
const CustomGridChild = styled.div`
  /* background-color: red; */
  margin: 0.8vh 0.5vw 0 0;
`

const GridForLogin = ({ usersData }) => {

  const allUsers = usersData

  return (
    <CustomBox sx={{ flexGrow: 1 }}>
      <CustomGrid 
        container 
        spacing={1.5}
        justifyContent={"flex-start"} 
        alignItems="center" 
        columns={{ xs: 3, sm: 4, md: 14 }}
      >
        {
          allUsers.map((user) => {
            return (
              <CustomGridChild item xs={12} md={2.5} key={user.id}>
                <UserCard
                  userData={user}
                />
              </CustomGridChild>
            )
          })
        }
      </CustomGrid>
    </CustomBox>
  )
}

export default GridForLogin