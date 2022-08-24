import React from 'react'
import { GlobalStateContext } from './context/GlobalStateContext'

const GlobalState = (props) => {

  const guest = "guest"

  return (
    <GlobalStateContext.Provider value={{guest}}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState