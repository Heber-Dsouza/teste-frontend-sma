import React, { useState, useContext } from 'react'

import { GlobalStateContext } from '../../global/context/GlobalStateContext';
import useForm from '../../hooks/useForm';
import useProtectedPage from '../../hooks/useProtectedPage';

import {
  ScreenContainer,
  InputContainer,
  AlignButton,
  CustomButton,
  AlignCustomBr,
  CustomBr,
  TituloTextfield,
  MaxLengthTitulo,
  CustomForm
} from "./styled"

const ProfilePage = () => {

  const { findUserData, currentUserId } = useContext(GlobalStateContext)

  useProtectedPage()

  const [notEditing, setNotEditing] = useState(true)

  const [form, onChange, clear] = useForm({
    name: findUserData(currentUserId).name,
    username: findUserData(currentUserId).username,
    email: findUserData(currentUserId).email
  })

  const onSubmitForm = (event) => {
    event.preventDefault()
    setNotEditing(!notEditing)
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