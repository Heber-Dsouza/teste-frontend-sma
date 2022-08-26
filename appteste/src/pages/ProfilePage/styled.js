import styled from "@emotion/styled"

import { TextField } from '@mui/material';
import { Button } from '@mui/material'

import { primaryColor } from '../../constants/colors';

export const ScreenContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 5vh;
  margin-bottom: 5vh;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: stretch;
  margin-bottom: 20px;
  margin-top: 100px;
`
export const AlignButton = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CustomButton = styled(Button)`
  margin-top: 11px;
  width: 47%;
  font-size: 12px;
  visibility: ${props => props.hidden && "hidden"};
`
export const AlignCustomBr = styled.div`
  display: flex;
  justify-content: center;
`
export const CustomBr = styled.div`
  border-bottom: 1px solid ${primaryColor};
  /* background-color: red; */
  width: 80%;
  margin: 25px;
  /* height: 100px; */
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
export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
`