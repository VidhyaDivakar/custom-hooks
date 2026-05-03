import { useState } from 'react'
import { PaginationDemo } from './components/PaginationDemo';
import { DebounceSearchDemo } from "./components/DebounceSearchDemo";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PaginationDemo />
      <DebounceSearchDemo />
    </>
  )
}

export default App;
