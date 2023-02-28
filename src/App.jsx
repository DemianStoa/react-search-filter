import { useState } from 'react'
import Filter from './Filter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Filter />
    </div>
  )
}

export default App
