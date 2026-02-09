import { useState, useEffect } from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Photos from './Components/Photos/Photos'
import BrowseByDressStyle from './Components/BrowseByDressStyle/BrowseByDressStyle'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
          <div className="relative flex items-center justify-center">
            <div className="h-50 w-50 animate-spin rounded-full border-6 border-gray-200 border-t-black"></div>
            
            <div className="absolute h-20 w-20 animate-pulse rounded-full bg-black/10 flex items-center justify-center">
               <span className="text-[10px] font-bold">SHOP</span>
            </div>
          </div>
          <p className="mt-4 text-sm font-medium tracking-[0.2em] text-gray-600 uppercase animate-pulse">
            Yuklanmoqda...
          </p>
        </div>
      ) : (
        <div className="animate-in fade-in duration-700">
          <Header />
          <Hero />
          <Photos />
          <BrowseByDressStyle />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App