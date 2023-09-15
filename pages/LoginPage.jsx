import React from 'react'
import Login from '../components/login'
import HeaderComponent from '../layouts/HeaderComponent'
import FooterComponent from '../layouts/FooterComponent'
import { useSelector } from 'react-redux'
import Page404 from './Page404'
const LoginPage = () => {
  const user = useSelector(store => store.user.user)
  return (
    <>
      <HeaderComponent />
      {!user ? <Login /> : <Page404 />}
      <FooterComponent />
    </>
  )
}

export default LoginPage