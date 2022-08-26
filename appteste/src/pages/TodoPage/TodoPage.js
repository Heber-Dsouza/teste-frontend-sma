import React, {useContext} from 'react'

import {GlobalStateContext} from "../../global/context/GlobalStateContext"
import GridForTodo from '../../components/Grids/GridForToDo/GridForTodo'

import {
  ScreenContainer,
  MainContainer,
  CustomWelcome
} from "./styled"

const message = "Seja bem-vindo(a) a página de anotações. Faça login para continuar ou crie um cadastro!"
const message2 = "Parece que você ainda não tem anotações..."

const TodoPage = () => {

  const { userTodo, currentUserId } = useContext(GlobalStateContext)

  return (
    <ScreenContainer>
      <MainContainer>

        {userTodo.length === 0 && currentUserId === null && <CustomWelcome>{message}</CustomWelcome>}
        {userTodo.length === 0 && currentUserId !== null && <CustomWelcome>{message2}</CustomWelcome>}
        <GridForTodo />

      </MainContainer>
      
    </ScreenContainer>
  )
}

export default TodoPage