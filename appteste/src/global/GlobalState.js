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

  const [createdUsers, setCreatedUsers] = useState(null)
  console.log(createdUsers);

  const creatingUser = (user) => {
    const id = Date.now()
    setCurrentUserId(id)
    const newUser = { id, ...user }
    setCreatedUsers(newUser)
    console.log(CURRENT_USERS_ID);
  }
  
  // CURRENT_USERS_ID = funcAdd(createdUsers, CURRENT_USERS_ID)

  const funcAdd = (createdUsers, data) => {

    const x = [...data]
    const y = createdUsers
    if (y !== null){
      x.push(y)
    }
    return x
  }

  CURRENT_USERS_ID = funcAdd(createdUsers, CURRENT_USERS_ID)
  CURRENT_USERS_ID = funcRemove(deletedUsersId, CURRENT_USERS_ID)
  
  console.log(CURRENT_USERS_ID);

  const currentUserData = CURRENT_USERS_ID && CURRENT_USERS_ID.find((user) => {
    return user.id === currentUserId
  })

  const findUserData = (id) => {
    if (CURRENT_USERS_ID) {
      
      return CURRENT_USERS_ID && CURRENT_USERS_ID.find((user) => {
        return user.id === id
      })
    }
    
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
      findUserData,
      creatingUser
    }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState