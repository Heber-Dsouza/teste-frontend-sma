import styled from '@emotion/styled';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';

import { neutralColor } from '../../../constants/colors';

export const CustomAccountCircleIcon = styled(AccountCircleIcon)`
  color: white;
  font-size: 30px;
  color: ${props => props.thecolor === "true" && neutralColor};
`
export const CustomTypography = styled(Typography)`
  color: ${props => props.thecolor === "true" && neutralColor};
`