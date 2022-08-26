import React, { useState } from 'react'
import { GlobalStateContext } from './context/GlobalStateContext'

import { BASE_URL } from "../constants/url"
import useRequestData from '../services/useRequestData'

import { funcRemove } from '../services/funcRemove'

const GlobalState = (props) => {

  const [currentUserId, setCurrentUserId] = useState(null)
  // console.log(currentUserId);

  const allUsers = useRequestData([], `${BASE_URL}/users`)
  
  let CURRENT_USERS_ID = [...allUsers]
  
  const [deletedUsersId, setDeletedUsersId] = useState([])

  const deletingUserId = (id) => {
    setDeletedUsersId([...deletedUsersId, id])
  }

  CURRENT_USERS_ID = funcRemove(deletedUsersId, CURRENT_USERS_ID)


  const currentUserData = CURRENT_USERS_ID && CURRENT_USERS_ID.find((user) => {
    return user.id === currentUserId
  })

  const findUserData = (id) => {
    
    return CURRENT_USERS_ID && CURRENT_USERS_ID.find((user) => {
      return user.id === id
    })
  }

  const userTodo = useRequestData([], `${BASE_URL}/users/${currentUserId}/todos`)

  return (
    <GlobalStateContext.Provider value={{ 
      currentUserId, 
      setCurrentUserId, 
      allUsers, 
      currentUserData, 
      CURRENT_USERS_ID, 
      deletedUsersId, 
      deletingUserId, 
      findUserData 
    }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState