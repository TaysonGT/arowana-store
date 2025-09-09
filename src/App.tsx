import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { ToastContainer } from 'react-toastify'
import LandingPage from './pages/Landing'
import 'swiper/css'
import 'swiper/css/navigation'

function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer 
      position='top-left' 
      theme='dark'
    />
    <Routes>
      <Route path='/' element={<LandingPage />}/>
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
