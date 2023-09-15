import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { loginTokenAction } from './redux/actions/usersActions'


import Home from './pages/Home'
import Cities from './pages/Cities'
import Page404 from './pages/Page404'
import Details from './pages/Details'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/cities', element: <Cities /> },
  { path: '/details/:id', element: <Details /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '*', element: <Page404 /> }
])

function App() {

  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  useEffect(() => {

    if (token) {
      dispatch(loginTokenAction())
    }

  })
  return (
    <RouterProvider router={router} />

  )
}

export default App
