import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PublicRoutes = () => {
  return (
    // <div className='w-screen h-screen overflow-x-hidden'>
    <>
        <Navbar fixable />
        <Outlet />
        <Footer />
    </>
    // </div>
  )
}

export default PublicRoutes