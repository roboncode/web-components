/* eslint-disable @next/next/no-img-element */
import './App.css'
import '@roboncode/lit-ui'
import '@roboncode/solid-ui'
import '@roboncode/svelte-ui'

import reactLogo from './assets/react.svg'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState<string>('React')
  
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <lit-counter name={name} onClick={() => setName('world')} class="block font-bold p-4 bg-shade rounded-md" />
      <solid-counter name={name} onClick={() => setName('world')} class="block font-bold p-4 bg-shade rounded-md" />
      <svelte-counter name={name} onClick={() => setName('world')} class="block font-bold p-4 bg-shade rounded-md" />

    </div>
  )
}

export default App
