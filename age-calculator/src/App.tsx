import { useState } from 'react'
import AgeCalculator from './components/AgeCalculator'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <AgeCalculator />
      </div>
    </>
  )
}

export default App
