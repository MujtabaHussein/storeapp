import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Item,
  SinglePageError,
} from './pages'
import { loader as landingLoader } from './pages/Landing.jsx'
import { loader as singelItemLoader } from './pages/Item.jsx'
import { action as newsLetterAciton } from './pages/Newsletter.jsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
/* ====================
React router and pathes
=======================*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing />, loader: landingLoader },
      { path: 'about', element: <About /> },
      {
        path: 'newsletter',
        action: newsLetterAciton,
        element: <Newsletter />,
        errorElement: <SinglePageError />,
      },
      {
        path: 'item/:id',
        loader: singelItemLoader,
        element: <Item />,
        errorElement: <SinglePageError />,
      },
    ],
  },
])

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
