import React from 'react'
import { GlobalStateContext } from './context/GlobalStateContext'

import { BASE_URL } from "../constants/url"
import useRequestData from '../services/useRequestData'

const GlobalState = (props) => {

  const guest = "guest"

  let allUsers = useRequestData([], `${BASE_URL}/users`)

  return (
    <GlobalStateContext.Provider value={{guest, allUsers}}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState