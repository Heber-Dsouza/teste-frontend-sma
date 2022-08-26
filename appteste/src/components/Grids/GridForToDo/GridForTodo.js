import React, {useContext} from 'react';

import {
  CustomBox,
  CustomGrid,
  CustomGridChild,
  CustomCard
} from "./styled"

import { GlobalStateContext } from '../../../global/context/GlobalStateContext';


const GridForTodo = () => {

  const { userTodo } = useContext(GlobalStateContext)

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
              userTodo.map((todo) => {
                return (
                  <CustomGridChild item xs={12} md={2.5} key={todo.id}>
                    <CustomCard cor={todo.completed} key={todo.id}>
                      <p>{todo.title}</p>
                    </CustomCard>
                  </CustomGridChild>
                )
              })
            }
          
      </CustomGrid>
    </CustomBox>
  )
}

export default GridForTodo