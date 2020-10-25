import Axios from 'axios'
import user from './user'

const domain = 'localhost'
const port = 3000

const config = {
  baseURL: `http://${domain}:${port}`,
}

const api = Axios.create(config)


export function registerUser(params) {
  return api.post('/register', params)
}

export function loginUser(params) {
  api.post('/signin', params)
  .then((response) => {
    const { data } = response
    user.logIn(data.accessToken)
    return true
  }),
    () => false
}

export function createPost(params) {
  return api.post('/posts', params, {
    headers: {
      Authorization: `Bearer ${user.getToken()}`
    }
  })
}
