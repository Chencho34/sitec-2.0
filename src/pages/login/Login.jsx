import { useNavigate } from 'react-router-dom'
import { FaUser, FaLock } from 'react-icons/fa'
import { FaSquareFacebook, FaInstagram, FaXTwitter} from 'react-icons/fa6'
import { LuLogIn } from 'react-icons/lu'


export default function Login() {
  const navigate = useNavigate()
  const user = 'chencho'
  const password = 123456
  const auth = () => {
    if('chencho' === user && 123456 === password) navigate('/')
    return
  }

  return (
    <section className='w-full h-screen flex items-center justify-between '>
      <aside className='hidden md:flex relative  h-full w-2/5 items-center justify-center bg-cover bg-center bg-no-repeat ' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
        <section className='text-slate-200 px-12 flex flex-col justify-end pb-10 h-full gap-8 absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-[rgb(33,33,33,.9)] to-[rgb(33,33,33,.5)] bg-transparent'>
          <h1 className='text-6xl font-bold tracking-wider leading-snug line-clamp-3'>
            Welcome! To MyPortalITO 
          </h1>
          <p className='text-md font-light tracking-wider'>
            You are currently on the login page, which grants you access to your school information, class schedules, and academic records (kardex).   
          Enter your credentials to log in and access your personal dashboard where you can view your academic details. Once logged in, youll be able to check your class schedules to know when and where your classes are held.
          </p>
          <button type='button' className='rounded-md border-2 border-neutral-50 py-2 text-xs font-medium uppercase text-slate-200 transition-colors hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 '>Website</button>
        </section>
      </aside>
      <aside className='w-full bg-slate-200 h-full md:w-3/5 flex items-center justify-center flex-col relative'>
        <nav className=' w-full h-16 absolute top-0 right-0 '>
          <section className='flex items-center justify-between h-full w-[80%] mx-auto '>
            <h1 className='text-blue-700 text-2xl font-normal'>MyPortalITO</h1>
            <ul className='flex gap-6 text-sm font-medium'>
              <li><FaSquareFacebook size={19} color='#212121'></FaSquareFacebook></li>
              <li><FaInstagram size={19} color='#212121'></FaInstagram></li>
              <li><FaXTwitter size={19} color='#212121'></FaXTwitter></li>
            </ul>
          </section>
        </nav>
        <form className='flex flex-col gap-6 bg-white rounded-lg shadow-lg p-8 w-full max-w-xs'>
          <h2 className='text-4xl font-bold text-center mb-4 text-[#212121]'>
            Login
          </h2>
          <label className='relative flex items-center' htmlFor='username'>
            <input
              className='h-10 w-full rounded-md border px-3 py-2 text-sm  focus-visible:outline-none focus-visible:ring-2'
              id='username'
              placeholder='Username'
              type='text'
            />
            <FaUser className='absolute right-3' size={14} color='#212121' />
          </label>
          <label className='relative flex items-center' htmlFor='password'>
            <input
              className='h-10 w-full rounded-md border px-3 py-2 text-sm  focus-visible:outline-none focus-visible:ring-2'
              id='password'
              placeholder='Password'
              type='password'
            />
            <FaLock className='absolute right-3' size={14} color='#212121' />
          </label>
          <a
            className='text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 ml-2 w-max'
            href='#'
          >
            Forgot your password?
          </a>
          <button
            className='text-[#fafafa] flex items-center justify-center gap-3 rounded-md text-sm font-medium transition-colors bg-[#26418f] h-10 px-4 py-2 w-full hover:bg-[#212121]'
            type='submit'
            onClick={auth}
          >
            Log In <LuLogIn color='#fafafa' size={14} />
          </button>
        </form>
        <footer className='w-full h-16 absolute bottom-0'>
          <section className='flex items-center justify-center h-full w-[80%] mx-auto '>
            <p className='text-xs font-medium text-[#212121]'>© 06/02/2024 Copyright: <span className='text-blue-700'>MyPortalITO</span> By Chencho</p>
          </section>
        </footer>
      </aside>
    </section>
  )
}
