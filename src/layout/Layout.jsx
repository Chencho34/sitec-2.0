import { Outlet } from 'react-router-dom'

export function Layout () {
  return (
    <>
      <nav>nav</nav>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  )
}
