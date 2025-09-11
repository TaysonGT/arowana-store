import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { ToastContainer } from 'react-toastify'
import LandingPage from './pages/Landing'
import 'swiper/css'
import 'swiper/css/navigation'
import PublicRoutes from './routes/PublicRoutes'
import ShopPage from './pages/Shop'
import CartPage from './pages/Cart'
import ProductPage from './pages/Product'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer 
      position='top-left' 
      theme='dark'
    />
    <CartProvider>
    <Routes>
      <Route path='/' element={<PublicRoutes />}>
        <Route index element={<LandingPage />}/>
        <Route path='/shop' element={<ShopPage />}/>
        <Route path='/products/:id' element={<ProductPage />}/>
        <Route path='/cart' element={<CartPage />}/>
      </Route>
    </Routes>
    </CartProvider>
    </BrowserRouter>
  </>
  )
}

export default App
