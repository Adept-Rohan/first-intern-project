import Header from './components/Header'
import {createBrowserRouter , RouterProvider , Outlet , ScrollRestoration} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Provider } from 'react-redux' 
import {store} from './redux/Store'
import Cart from './pages/Cart'
import {QueryClient , QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import Footer from './components/Footer'
import SingleProduct from './components/SingleProduct'

const Layout = () =>{
  return (
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path:'/signin',
        element : <Login/>
      },
      {
         path : '/product/:id',
         element : <SingleProduct/>
      },

      {
        path: '/register',
        element: <Register/>
      },
      {
        path:'/cart',
        element: <Cart/>
      }
    ]
  }
])

function App() {
  
  const queryClient = new QueryClient()

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
     <RouterProvider router={router} />
     </Provider>
     <ReactQueryDevtools/>
     </QueryClientProvider>
    </>
  )
}

export default App
