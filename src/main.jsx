
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sustainability from './components/sastainability/Sustainability.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Contactus from './components/contactus/Contactus.jsx'
import Qc_Qa from './components/qc&qa/Qc_Qa.jsx'
import Products from './components/products/Products.jsx'
import Gallery from './components/gallery/Gallery.jsx'
import { HelmetProvider } from 'react-helmet-async'
import Sitemap from './components/sitemap/Sitemap.jsx'
import Login from './login/Login.jsx'
import AuthProvider from './firebase/AuthProvider.jsx'
let router = createBrowserRouter([
  {
    path: "",
    Component: Root,
    children: [
      {
        index: true,
        Component: App
      },
      {
        path: '/sustainability',
        Component: Sustainability
      },
      {
        path: '/contact-us',
        Component: Contactus
      },
      {
        path: '/qc-qa',
        Component: Qc_Qa
      },
      {
        path: '/products',
        Component: Products
      },
      {
        path: '/gallery',
        Component: Gallery
      },
      {
        path: 'sitemap',
        Component: Sitemap
      },
      {
        path: '/login',
        Component: Login
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
  </HelmetProvider>
)
