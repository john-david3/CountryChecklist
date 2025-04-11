import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import WorldMap from './components/WorldMap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>World Map CheckList</h1>
        <WorldMap />
      </div>
    </>
  )
}

export default App
