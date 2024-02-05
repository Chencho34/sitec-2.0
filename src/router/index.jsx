import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Home, Kardex, Login, NotFound, Schedule } from '../pages'
import { AuthLayout, Layout } from '../layouts'


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='/' index element={<Home />} />
        <Route path='kardex' element={<Kardex />} />
        <Route path='schedule' element={<Schedule />} />
        <Route path='*' element={<NotFound />} />
      </Route>
      <Route path='/login' element={<AuthLayout /> }>
        <Route path='/login' index element={<Login />} />
      </Route>
    </>
  )
)

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
         
//       },
//       {
//         path: 'kardex',
//         element: <Kardex />
//       },
//       {
//         path: 'login',
//         element: <Login />
//       },
//       {
//         path: 'schedule',
//         element: <Schedule />
//       },
//       {
//         path: 'notfound',
//         element: <NotFound />
//       }
//     ]
//   }
// ])
