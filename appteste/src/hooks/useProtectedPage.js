import { useEffect, useContext } from 'react'
import { GlobalStateContext } from '../global/context/GlobalStateContext'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from '../routes/coordinator'

const useProtectedPage = () => {
  const navigate = useNavigate()
  const { currentUserId } = useContext(GlobalStateContext)

  useEffect(() => {
    if (currentUserId === null) {
      goToLoginPage(navigate)
    }
  }, [navigate])
}

export default useProtectedPage