export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (username === `mario.client` && password === `secret`) {
    return setUser({
      username: `mario.client`,
      name: `Mario Client`,
      email: `mario.arteaga.client@jalasoft.com`,
      role: `client`
    })
  }

  if (username === `mario.admin` && password === `secret`) {
    return setUser({
      username: `mario.admin`,
      name: `Mario Admin`,
      email: `mario.arteaga.admin@jalasoft.com`,
      role: `admin`
    })
  }

  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}