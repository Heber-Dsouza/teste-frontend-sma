import React, {useContext, useState} from 'react'

import {
  ScreenContainer,
  InputContainer,
  TituloTextfield,
  MaxLengthTitulo,
  CustomButton
} from "./styled"

import { GlobalStateContext } from '../../global/context/GlobalStateContext';
import useForm from '../../hooks/useForm'

import { useNavigate } from 'react-router-dom'
import { goToLoginPage, goToTodoPage } from "../../routes/coordinator"
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

import SnackNBar from "../../components/SnackNBar/SnackNBar"




const SignupPage = () => {

  const navigate = useNavigate()
  
  useUnprotectedPage()

  const { creatingUser } = useContext(GlobalStateContext)

  const [form, onChange, clear] = useForm({
    name: "",
    username: "",
    email: ""
  })

  const onSubmitForm = (event) => {
    event.preventDefault()
    creatingUser(form)
    clear()
    setOpenSB(true)
    goToTodoPage(navigate)
  }

  const [openSB, setOpenSB] = useState(false);


  return (
    <ScreenContainer>
      <InputContainer>

        <form onSubmit={onSubmitForm}>

          <TituloTextfield
            type='text'
            label="Nome"
            variant="outlined"
            name={"name"}
            value={"" || form.name}
            onChange={onChange("name")}
            required
            margin='dense'
            inputProps={{ maxLength: 35 }}
            placeholder={"Insira seu nome e sobrenome..."}
            fullWidth
          />

          <MaxLengthTitulo>{form.name.length}/35</MaxLengthTitulo>

          <TituloTextfield
            type='text'
            label="Nome de Usuário"
            variant="outlined"
            name={"username"}
            value={"" || form.username}
            onChange={onChange("username")}
            required
            margin='dense'
            inputProps={{ maxLength: 15 }}
            placeholder={"Escolha um nome de usuário..."}
            fullWidth
          />

          <MaxLengthTitulo>{form.username.length}/15</MaxLengthTitulo>

          <TituloTextfield
            type='email'
            label="E-mail"
            variant="outlined"
            name={"email"}
            value={"" || form.email}
            onChange={onChange("email")}
            required
            margin='dense'
            placeholder={"Ex.: teste@gmail.com"}
            fullWidth
          />

          <CustomButton
            type='submit'
            variant='contained'
          >Cadastrar-se</CustomButton>
        </form>

        <CustomButton
          variant='outlined'
          fullWidth
          onClick={() => goToLoginPage(navigate)}
        >Login</CustomButton>

      </InputContainer>
      <SnackNBar
        message={`Usuário(a) ${form.name} criado(a) com sucesso!`}
        openSB={openSB}
        setOpenSB={setOpenSB}
      />
    </ScreenContainer>
  )
}

export default SignupPage