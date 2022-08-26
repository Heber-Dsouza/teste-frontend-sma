import React, {useContext} from 'react'

import {GlobalStateContext} from "../../global/context/GlobalStateContext"
import GridForTodo from '../../components/Grids/GridForToDo/GridForTodo'

import {
  ScreenContainer,
  MainContainer,
  CustomWelcome
} from "./styled"

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