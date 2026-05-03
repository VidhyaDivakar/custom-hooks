import { useState } from 'react'
import { PaginationDemo } from './components/PaginationDemo';

import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PaginationDemo/>
    </>
  )
}

export default App;
