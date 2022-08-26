import styled from "@emotion/styled"

import { primaryColor } from "../../constants/colors"
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export const MainContainer = styled(Button)`
  border: 1px solid ${primaryColor};
  padding: 0;
  border-radius: 0;
  /* width: 160px;
  height: 200px; */
  min-width: 186px;
  height: 200px;
  display: flex;
  flex-direction: column;
`
export const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid ${primaryColor};
  height: 20px;
  width: 20px;
  position: relative;
  bottom: 159px;
  left: 3px;
    :hover{
      height: 30px;
      width: 30px;
      color: red;
    }
`
export const CustomCloseIcon = styled(CloseIcon)`
  width: 20px;
`
export const ImageContainer = styled.div`
  width: 100%;
  flex-grow: 1;
`
export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  width: 85%;
  margin: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: horizontal;
  span {
    font-size: 1rem;
    font-weight: bolder;
  }
`