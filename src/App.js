import './App.css'
import Body from './components/Body'
import Head from './components/Head'
import { Provider } from 'react-redux'
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
import { useDispatch } from 'react-redux'
import { hideSuggestions } from './utils/appSlice'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: 'watch',
        element: <WatchPage />,
      },
    ],
  },
])
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
function App() {
  const dispatch = useDispatch()
  return (
    <div onScroll={() => dispatch(hideSuggestions())}>
      <Head />
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default AppWrapper
