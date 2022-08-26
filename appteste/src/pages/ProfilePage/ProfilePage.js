import React, { useState, useContext } from 'react'
import styled from "@emotion/styled"

import { GlobalStateContext } from '../../global/context/GlobalStateContext';
import useForm from '../../hooks/useForm';

import { TextField } from '@mui/material';
import { Button } from '@mui/material'

import { primaryColor } from '../../constants/colors';


const ScreenContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 5vh;
  margin-bottom: 5vh;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: stretch;
  margin-bottom: 20px;
`
const AlignButton = styled.div`
  display: flex;
  justify-content: space-between;
`
const CustomButton = styled(Button)`
  margin-top: 11px;
  width: 47%;
  font-size: 12px;
  visibility: ${props => props.hidden && "hidden"};
`
const AlignCustomBr = styled.div`
  display: flex;
  justify-content: center;
`
const CustomBr = styled.div`
  border-bottom: 1px solid ${primaryColor};
  /* background-color: red; */
  width: 80%;
  margin: 25px;
  /* height: 100px; */
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
const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
`

const ProfilePage = () => {

  const { findUserData, currentUserId } = useContext(GlobalStateContext)

  const [notEditing, setNotEditing] = useState(true)

  const [form, onChange, clear] = useForm({
    name: findUserData(currentUserId).name,
    username: findUserData(currentUserId).username,
    email: findUserData(currentUserId).email
  })

  const onSubmitForm = (event) => {
    event.preventDefault()
    setNotEditing(!notEditing)
    console.log("");
  }

  return (
    <ScreenContainer>
      <InputContainer>
        <CustomButton
          type={"submit"}
          variant='contained'
          fullWidth size='large'
          style={{ "alignSelf": "flex-start", "marginBottom": "15px", "width": "35%" }}
          onClick={() => setNotEditing(!notEditing)}
          disabled={!notEditing}
        >{"Editar perfil"}</CustomButton>

        <CustomForm onSubmit={onSubmitForm}>

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
            disabled={notEditing}
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
            disabled={notEditing}
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
            disabled={notEditing}
          />

          <AlignButton>

            <CustomButton
              variant='outlined'
              fullWidth size='large'
              onClick={() => setNotEditing(!notEditing)}
              disabled={notEditing}
            >{"Cancelar"}</CustomButton>

            <CustomButton
              type={"submit"}
              variant='contained'
              fullWidth size='large'
              disabled={notEditing}
            >{"Salvar Alterações"}</CustomButton>
          </AlignButton>

          <AlignCustomBr>
            <CustomBr />
          </AlignCustomBr>
        </CustomForm>

      </InputContainer>
    </ScreenContainer>
  )
}

export default ProfilePage