import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'
import AuthInitializer from './auth/AuthInitializer.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <Provider store={store}>
      <AuthInitializer>
      <RouterProvider router={router}/>
      </AuthInitializer>
    </Provider>
  //</StrictMode>,
)
