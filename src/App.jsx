import { useState } from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Photos from './Components/Photos/Photos'
import BrowseByDressStyle from './Components/BrowseByDressStyle/BrowseByDressStyle'
import HappyCustomers from './Components/HappyCustomers/HappyCustomers'
import Footer from './Components/Footer/Footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Hero />
    <Photos />
    <BrowseByDressStyle />
    <HappyCustomers />
    <Footer />
    </>
  )
}

export default App
