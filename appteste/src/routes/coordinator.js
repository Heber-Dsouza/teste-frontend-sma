export const goToHomePage = (navigate) => {
  navigate('/')
}

export const goToLoginPage = (navigate) => {
  navigate('/entrar')
}

export const goToSignupPage = (navigate) => {
  navigate('/cadastrar')
}

export const goToProfilePage = (navigate, id) => {
  navigate(`/perfil/${id}`)
}

export const goToForumPage = (navigate, id) => {
  navigate(`/forum/${id}`)
}

export const goToAlbumsPage = (navigate, id) => {
  navigate(`/albums/${id}`)
}

export const goToTodoPage = (navigate, id) => {
  navigate(`/todo/${id}`)
}