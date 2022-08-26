import React, {useContext} from 'react'
import styled from "@emotion/styled"

import {GlobalStateContext} from "../../global/context/GlobalStateContext"
import GridForTodo from '../../components/Grids/GridForToDo/GridForTodo'

const ScreenContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
const MainContainer = styled.div`
  /* border: 1px solid black; */
  margin: 80px auto;
  width: 80%;
  max-width: 1200px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const CustomWelcome = styled.div`
  margin-top: 80px;
  font-size: 1.3em;
`
const message = "Seja bem-vindo(a) a página de anotações. Faça login para continuar ou crie um cadastro!"

const TodoPage = () => {

  const { userTodo } = useContext(GlobalStateContext)

  return (
    <ScreenContainer>
      <MainContainer>

        {userTodo.length === 0 && <CustomWelcome>{message}</CustomWelcome>}
        <GridForTodo />

      </MainContainer>
      
    </ScreenContainer>
  )
}

export default TodoPage