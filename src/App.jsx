import { useState } from 'react'
import './App.css'
import Header from './components/common/Header'
import Data from './data.json'
import List from './components/uniqlist/List'
import Index from './components/common/Index'
import Button from './components/common/Button'
import Event from './components/event_handler'
import New from './components/event_handler/index2'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/contact'
import Home from './pages/home'
import About from './pages/about'
import AppRoute from './routes'


function App() {
  
  return (
    <div>
      {/* {Data.map((item,index)=><Header key={index} employe={item.title} des={item.des}/>)} */}
      {/* <List/> */}
      {/* <Index/> */}
      {/* <Button/> */}
      {/* <Event/> */}
      {/* <New/>
      <Header/> */}
      {/* <Contact/>
      <About/> */}
      <AppRoute/>
     
      
    </div>
  
  )
}

export default App ;
