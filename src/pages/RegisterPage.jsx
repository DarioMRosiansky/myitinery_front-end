import React from 'react'
import Register from '../components/Register'
import HeaderComponent from '../layouts/HeaderComponent'
import FooterComponent from '../layouts/FooterComponent'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Page404 from './Page404'

const RegisterPage = () => {
  const user = useSelector(store => store.user.user)
  const navigate = useNavigate()

  return (
    <>
      <HeaderComponent />
      {!user ? <Register /> : <Page404 />}
      <FooterComponent />
    </>
  )
}

export default RegisterPage