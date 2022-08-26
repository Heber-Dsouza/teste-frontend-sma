import { useEffect, useContext } from 'react'
import { GlobalStateContext } from '../global/context/GlobalStateContext'
import { useNavigate } from 'react-router-dom'
import { goToTodoPage } from '../routes/coordinator'

const useUnprotectedPage = () => {
  const navigate = useNavigate()
  const { currentUserId } = useContext(GlobalStateContext)

  useEffect(() => {
    if (currentUserId) {
      goToTodoPage(navigate)
    }
  }, [navigate])
}

export default useUnprotectedPage