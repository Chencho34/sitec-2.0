import { NavLink, Link } from 'react-router-dom'
import { paths } from '../../constants'

export default function Nav() {
  return (
    <nav className='w-full h-16 bg-gradient-to-r from-gray-900 to-gray-700/80 bg-transparen backdrop-blur-sm'>
      <section className='flex items-center justify-between w-11/12 h-full mx-auto max-w-7xl'>
        <article className='flex flex-row items-center gap-4 space-y-1.5'>
          <Link to='/' className='text-2xl text-white font-semibold leading-none tracking-tight flex items-center hover:text-cyan-400'>
            Sitec 2.0
          </Link>
          <p className='text-sm text-white '>Escolar System</p>
        </article>
        <ul className='flex flex-row gap-8 scale-up-center mr-8 text-white'>
          {
            paths.map(({ item, path }, index) => (
              <li key={index}>
                <NavLink to={path} className='text-sm font-medium hover:text-cyan-400 transition-colors duration-500'>
                  {item}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </section>
    </nav>
  )
}
