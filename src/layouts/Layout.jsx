import { Outlet } from 'react-router-dom'
import { Nav } from '../components'

export default function Layout () {
  return (
    <>
      <Nav />
      <main className='h-[calc(100vh-64px)] flex items-center bg-slate-200'>
        <Outlet />
      </main>
      <footer className='w-full h-16 '>
        <section className='flex items-center justify-center h-full w-[80%] mx-auto '>
          <p className='text-xs font-medium text-[#212121]'>© 06/02/2024 Copyright: <span className='text-blue-700'>MyPortalITO</span> By Chencho</p>
        </section>
      </footer>
    </>
  )
}
