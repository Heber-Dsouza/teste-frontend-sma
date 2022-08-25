import React, { useState } from 'react'
import { GlobalStateContext } from './context/GlobalStateContext'

import { BASE_URL } from "../constants/url"
import useRequestData from '../services/useRequestData'

const GlobalState = (props) => {

  const [currentUser, setCurrentUser] = useState(null)

  const allUsers = useRequestData([], `${BASE_URL}/users`)
  const userTodo = useRequestData([], `${BASE_URL}/users/${currentUser}/todos`)

  return (
    <GlobalStateContext.Provider value={{ currentUser, setCurrentUser, allUsers}}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState