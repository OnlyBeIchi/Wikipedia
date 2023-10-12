import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import Login from '../../Login/Login'
import Home from './Home'

function Page() {
  return (
    <div>
        <div><Header/></div>
        <div><Home/></div>
        <div><Footer/></div>
    </div>

  )
}

export default Page