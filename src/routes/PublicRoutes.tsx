import { Outlet, useLocation } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLayoutEffect } from 'react'

const PublicRoutes = () => {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
        <Navbar fixable />
        <Outlet />
        <Footer />
    </>
  )
}

export default PublicRoutes