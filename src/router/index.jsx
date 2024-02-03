import { createBrowserRouter } from 'react-router-dom'
import { Home, Kardex, Login, NotFound, Schedule } from '../pages'
import App from '../App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
         
      },
      {
        path: 'kardex',
        element: <Kardex />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'schedule',
        element: <Schedule />
      }
    ]
  }
])
