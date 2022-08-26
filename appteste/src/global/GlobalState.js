import React, { useState } from 'react'
import { GlobalStateContext } from './context/GlobalStateContext'

import { BASE_URL } from "../constants/url"
import useRequestData from '../services/useRequestData'

const GlobalState = (props) => {

  const [currentUserId, setCurrentUserId] = useState(null)
  console.log(currentUserId);

  

  const allUsers = useRequestData([], `${BASE_URL}/users`)

  const currentUserData = allUsers && allUsers.find((user) => {
    return user.id === currentUserId
  })
  console.log(currentUserData && currentUserData.username);

  const userTodo = useRequestData([], `${BASE_URL}/users/${currentUserId}/todos`)

  return (
    <GlobalStateContext.Provider value={{ currentUserId, setCurrentUserId, allUsers, currentUserData }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState