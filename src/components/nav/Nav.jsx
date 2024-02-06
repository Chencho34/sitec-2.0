import { NavLink, Link } from 'react-router-dom'
import { IoHome } from 'react-icons/io5'
import { BsFillGridFill } from 'react-icons/bs'
import { LuLogIn } from 'react-icons/lu'
import { LuLogOut } from 'react-icons/lu'
import { paths } from '../../constants'
import { FaFile } from 'react-icons/fa6'


export default function Nav() {
  return (
    <nav className='w-full h-16 bg-[#212121]'>
      <section className='flex items-center justify-between w-11/12 h-full mx-auto max-w-7xl'>
        <article className='flex flex-row items-center gap-4 space-y-1.5'>
          <Link to='/' className='text-2xl text-white font-semibold leading-none tracking-tight flex items-center hover:text-cyan-400'>
            Sitec 2.0
          </Link>
          <p className='text-sm text-white '>School system for student access</p>
        </article>
        <ul className='flex text- flex-row gap-8 scale-up-center mr-8 text-white'>
         <li className='flex items-center gap-1'>
            <IoHome color='#fafafa' size={16}/>
            <NavLink to='/'>Home</NavLink>
          </li>
         <li className='flex items-center gap-1'>
            <FaFile color='#fafafa' size={16}/>
            <NavLink to='kardex'>Kardex</NavLink>
          </li>
         <li className='flex items-center gap-1'>
            <BsFillGridFill color='#fafafa' size={16}/>
            <NavLink to='schedule'>Schedule</NavLink>
          </li>
         <li className='flex items-center gap-1'>
            <LuLogOut color='#fafafa' size={16}/>
            <NavLink to='login'>LogOut</NavLink>
          </li>
        </ul>
      </section>
    </nav>
  )
}
