import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './components/Calculator'
import GlobalStyle from './globalStyles'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyle/>
    <Calculator/>
     
    </>
  )
}

export default App
