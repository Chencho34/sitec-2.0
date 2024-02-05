import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Home, Kardex, Login, NotFound, Schedule } from '../pages'
import { Layout } from '../layout'


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' index element={<Home />} />
      <Route path='kardex' element={<Kardex />} /> 
      <Route path='schedule' element={<Schedule />} />
      <Route path='login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Route>
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
