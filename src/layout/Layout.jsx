import { Outlet } from 'react-router-dom'
import { Nav } from '../components'

const paths = [
  { path: '/', item: 'Home'},
  { path: 'kardex', item: 'Kardex'},
  { path: 'schedule', item: 'Schedule'},
  { path: 'login', item: 'Log Out'},
]

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
