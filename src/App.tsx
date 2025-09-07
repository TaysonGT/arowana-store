import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { ToastContainer } from 'react-toastify'
import PublicRoutes from './routes/PublicRoutes'
import LandingPage from './pages/Landing'

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
