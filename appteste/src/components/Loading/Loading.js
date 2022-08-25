import React from 'react'
import styled from "@emotion/styled"

import CircularProgress from '@mui/material/CircularProgress';

const CustomLoading = styled(CircularProgress)`
  margin: 200px 0;
`

const Loading = () => {
  return (
    <CustomLoading color='inherit' size={24}/>
  )
}

export default Loading