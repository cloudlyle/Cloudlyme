import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { InboxPage } from '../pages/InboxPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/inbox',
      element: <InboxPage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
  { basename: import.meta.env.BASE_URL },
)
