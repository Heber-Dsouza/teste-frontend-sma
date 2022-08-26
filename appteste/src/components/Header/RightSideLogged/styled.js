import styled from '@emotion/styled';

import Typography from '@mui/material/Typography';

import { neutralColor } from '../../../constants/colors';

export const CustomTypography = styled(Typography)`
  color: ${props => props.thecolor === "true" && neutralColor};
  width: 90px;
`