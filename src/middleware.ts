import { auth } from './auth'
import { publicRoutes } from './routes'

export default auth((req) => {
  const {nextUrl} = req
  const isLoggedIn = !!req.auth

  const isPublic = publicRoutes.includes(nextUrl.pathname)
  
})