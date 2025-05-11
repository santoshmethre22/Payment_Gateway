import { useState } from 'react'

import './App.css'
import PaymentButton from './Payment/PaymentButton'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     hi how are you -----
     <PaymentButton />
    </>
  )
}

export default App
