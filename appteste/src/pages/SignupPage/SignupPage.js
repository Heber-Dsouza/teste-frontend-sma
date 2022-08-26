import React, {useContext} from 'react'
import styled from "@emotion/styled"

import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

import { GlobalStateContext } from '../../global/context/GlobalStateContext';

import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from "../../routes/coordinator"

import useForm from '../../hooks/useForm'

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  margin-top: 3.5vh;
  flex-grow: 1;
`
const InputContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
  flex-grow: 1;
  /* border: black 1px solid; */
    form {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
`
const TituloTextfield = styled(TextField)`
  margin: 0px 0px 4px 0px;
`
const MaxLengthTitulo = styled.span`
  align-self: flex-end;
  margin-right: 8px;
  margin-bottom: 10px;
  font-size: 0.9rem;
`
const CustomButton = styled(Button)`
  height: 50px;
  margin-top: 10px;
`

const SignupPage = () => {

  const navigate = useNavigate()

  const { creatingUser } = useContext(GlobalStateContext)

  const [form, onChange, clear] = useForm({
    name: "",
    username: "",
    email: "",
  })

  const onSubmitForm = (event) => {
    event.preventDefault()
    creatingUser(form)
  }

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
    </ScreenContainer>
  )
}

export default SignupPage