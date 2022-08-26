import React from 'react'
import styled from "@emotion/styled"

import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box';

const CustomBox = styled(Box)`
  margin-top: 200px;
`
const CustomText = styled.span`
  margin-top: 10px;
`

const Loading = () => {
  return (
    <>
      <CustomBox sx={{ width: '50%' }}>
        <LinearProgress />
      </CustomBox>
      <CustomText>carregando...</CustomText>
    </>
    
  )
}

export default Loading