import React, {useContext} from 'react';
import styled from '@emotion/styled'

import { GlobalStateContext } from '../../../global/context/GlobalStateContext';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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
      left: 4%;
      margin-top: 35px;
  }
  @media screen and (max-device-width : 700px) {
    /* width: 275px; */
    width: 66%;
  }
`
const CustomGridChild = styled.div`
  /* background-color: red; */
  margin: 0.8vh 0.5vw 0 0;
`
const CustomCard = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  background-color: ${props => props.cor ? "lightgreen" : "pink" };
    p{
      font-size: 15px;
      padding: 8px;
    }
`

const GridForTodo = () => {

  const { userTodo } = useContext(GlobalStateContext)
  console.log(userTodo);

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