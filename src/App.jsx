import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import './index.css';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
          <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>
    </>
  )
}

export default App
