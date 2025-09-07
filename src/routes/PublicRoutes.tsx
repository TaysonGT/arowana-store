import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const PublicRoutes = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default PublicRoutes