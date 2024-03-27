import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Layout.css'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default App