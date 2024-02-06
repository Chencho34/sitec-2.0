import { useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'

export default function Login() {
  const navigate = useNavigate()
  const auth = () => {
    navigate('/')
  }

  return (
    <section className='w-full h-screen flex items-center justify-between '>
      <article className='hidden md:flex relative  h-full w-2/5 items-center justify-center bg-cover bg-center bg-no-repeat ' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
        <section className='text-slate-200 px-8 flex flex-col justify-end pb-10 h-full gap-8 absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-[rgb(33,33,33,.9)] to-[rgb(33,33,33,.5)] bg-transparent'>
          <h1 className='text-5xl font-bold'>
            Welcome To My New Sitec 2.0!!
          </h1>
          <p className='text-md font-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            cupiditate soluta vero a aperiam quo molestiae. Odit, dolor ullam
            praesentium, reprehenderit placeat nulla doloremque eligendi ipsum
            quos nesciunt, inventore ipsa in quibusdam.
          </p>
        </section>
      </article>
      <article className='w-full bg-slate-200 h-full md:w-3/5 flex items-center justify-center flex-col relative'>
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
            <FaUser className='absolute right-3' size={18} color='#212121' />
          </label>
          <label className='relative flex items-center' htmlFor='password'>
            <input
              className='h-10 w-full rounded-md border px-3 py-2 text-sm  focus-visible:outline-none focus-visible:ring-2'
              id='password'
              placeholder='Password'
              type='password'
            />
            <FaLock className='absolute right-3' color='#212121' />
          </label>
          <a
            className='text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 ml-2 w-max'
            href='#'
          >
            Forgot your password?
          </a>
          <button
            className='rounded-md text-sm font-medium transition-colors bg-[#26418f] h-10 px-4 py-2 w-full hover:bg-[#212121] text-white'
            type='submit'
            onClick={auth}
          >
            Log In
          </button>
        </form>
      </article>
    </section>
  )
}
