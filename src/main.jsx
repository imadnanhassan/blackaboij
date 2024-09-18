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
import CustomerProvider from './Providers/CustomerProvider.jsx'
import axios from 'axios'

// axios.interceptors.request.use(function(config){
//   const token = localStorage.getItem('adminToken') ?? null;
//   config.headers.Authorization = token != null ? `Bearer ${token}` : null
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <CustomerProvider>
          <ToastContainer />
          <RouterProvider router={router} />
        </CustomerProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
