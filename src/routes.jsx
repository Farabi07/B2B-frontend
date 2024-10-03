import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import ProductPage from './pages/ProductPage'

const AppRoute = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact={true} element={<Home/>}/>
            <Route path="Contact" exact={true} element={<Contact/>}/>
            <Route path="About" exact={true} element={<About/>}/>
            <Route path="ProductPage" exact={true} element={<ProductPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoute