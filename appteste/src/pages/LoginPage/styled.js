import styled from "@emotion/styled"

import Button from '@mui/material/Button'

export const ScreenContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
export const MainContainer = styled.div`
  /* border: 1px solid black; */
  margin: 80px auto;
  width: 80%;
  max-width: 1200px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const CustomButton = styled(Button)`
  margin-top: 35px;
`