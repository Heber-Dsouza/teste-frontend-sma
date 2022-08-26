import React from 'react';

import {
  CustomBox,
  CustomGrid,
  CustomGridChild
} from "./styled"

import UserCard from '../../UserCard/UserCard';

const GridForLogin = ({ usersData, handleClickOpen }) => {

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
                  handleClickOpen={handleClickOpen}
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