import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import './assets/css/frontend.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AuthProvider from './Providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <ToastContainer />
        <RouterProvider router={router} />
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
)
