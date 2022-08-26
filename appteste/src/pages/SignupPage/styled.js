import styled from "@emotion/styled"

import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  margin-top: 3.5vh;
  flex-grow: 1;
`
export const InputContainer = styled.div`
  margin-top: 100px;
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
export const TituloTextfield = styled(TextField)`
  margin: 0px 0px 4px 0px;
`
export const MaxLengthTitulo = styled.span`
  align-self: flex-end;
  margin-right: 8px;
  margin-bottom: 10px;
  font-size: 0.9rem;
`
export const CustomButton = styled(Button)`
  height: 50px;
  margin-top: 10px;
`