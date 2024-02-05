import { Outlet } from 'react-router-dom'
import { Nav } from '../components'

export function Layout () {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  )
}
