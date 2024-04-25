import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CountdownTimer } from './components/CountdownTimer'
import { UserList } from './components/UserList'
import { WindowSize } from './components/WindowSize'
import './App.css'

function App() {


  return (
    <>
     <div>
      <CountdownTimer />
      <UserList/>
      <WindowSize/>
    </div>
    </>
  )
}

export default App
