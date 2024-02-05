import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Home, Kardex, Login, NotFound, Schedule } from '../pages'
import App from '../App'


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
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
