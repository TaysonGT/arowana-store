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
      // style={}
      // containerStyle={
      //   { zIndex: 9999, marginTop: '80px', userSelect: "none"} 
      // }

    />
    <Routes>
      <Route path='/' element={<LandingPage />}/>
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
