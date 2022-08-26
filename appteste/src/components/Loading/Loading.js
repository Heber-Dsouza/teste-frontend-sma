import React from 'react'

import {
  CustomBox,
  CustomText
} from "./styled"

import LinearProgress from '@mui/material/LinearProgress'

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