import styled from "@emotion/styled"

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import { neutralColor } from '../../../constants/colors';


export const CustomButton = styled(Button)`
    color: ${props => props.inbuild === "true" ? "white" : "grey"};
  :hover {
    text-decoration: underline;
    color: ${props => props.inbuild === "true" ? neutralColor : "#b59ca2"}
  }
`
export const CustomTypography = styled(Typography)`
  margin-right: 0;
`
export const LogoContainer = styled(Button)`
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
    :hover {
    color: ${neutralColor};
  }
`