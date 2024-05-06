import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/home/Home'
import About from './components/about/About'
import ContactUs from './components/contact/ContactUs'
import User from './components/user/User'
import Github from './components/github/Github'


// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Layout />,
//         children: [
//             {
//                 path: '',
//                 element: <Home />
//             },
//             {
//                 path: 'about',
//                 element: <About />
//             },
//             {
//                 path: 'contact-us',
//                 element: <ContactUs />
//             }
//         ]
//     }
// ])

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />} >
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact-us' element={<ContactUs />} />
            <Route path='user/:userid' element={<User />} />
            <Route path='github' element={<Github />} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
