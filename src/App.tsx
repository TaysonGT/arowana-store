import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { ToastContainer } from 'react-toastify'
import LandingPage from './pages/Landing'
import 'swiper/css'
import 'swiper/css/navigation'
import PublicRoutes from './routes/PublicRoutes'

function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer 
      position='top-left' 
      theme='dark'
    />
    <Routes>
      <Route path='/' element={<PublicRoutes />}>
        <Route index element={<LandingPage />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
