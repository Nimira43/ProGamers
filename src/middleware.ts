import { auth } from './auth'

export default auth((req) => {
  const {nextUrl} = req
  const isLoggedIn = !!req.auth
})