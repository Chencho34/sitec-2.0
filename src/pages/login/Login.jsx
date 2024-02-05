import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const auth = () => {
    navigate('/')
  }

  return (
    <section className='w-full h-screen flex items-center justify-between '>
      <article className='bg-[#212121] h-full w-2/5 flex items-center justify-center '>
        {/* <img
          src='https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='img'
          className='object-cover h-full'
        /> */}
        <section className='text-slate-200 px-8 flex flex-col justify-end pb-10 h-full gap-8 '>
          <h1 className='text-6xl font-normal'>Welcome to my new sitec 2.0!!</h1>
          <p className='text-md font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate soluta vero a aperiam quo molestiae. Odit, dolor ullam praesentium, reprehenderit placeat nulla doloremque eligendi ipsum quos nesciunt, inventore ipsa in quibusdam.</p>
        </section>
      </article>
      <article className='bg-[202020] bg-slate-200 h-full w-3/5 flex items-center justify-center flex-col'>
        {/* <h1 className='text-6xl text-[#212121] font-bold mb-11'>Welcome to Sitec 2.0</h1> */}
        <div className='bg-white rounded-lg shadow-lg p-8 w-full max-w-md'>
          <h2 className='text-4xl font-bold text-center mb-4 text-[#212121]'>Login</h2>
          <form className='space-y-4'>
            <div>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='username'
              >
                Username
              </label>
              <input
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                id='username'
                placeholder='Username'
                required=''
                type='text'
              />
            </div>
            <div >
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='password'
              >
                Password
              </label>
              <input
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                id='password'
                placeholder='Password'
                required=''
                type='password'
              />
              <a
              className='text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600'
              href='#'
            >
              Forgot your password?
            </a>
            </div>
            <div className='flex items-center '>
              <button
                className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-[#212121] text-white'
                type='submit'
                onClick={auth}
              >
                Log In
              </button>
              
            </div>
          </form>
        </div>
      </article>
    </section>
  )
}
