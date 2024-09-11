import { useState } from 'react'
import './App.css'
import Header from './components/common/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Header />
      <Header />
      <Header />
      
    </>
  )
}

export default App ;
