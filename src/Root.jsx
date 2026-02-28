import { Outlet, } from "react-router-dom";
import { lazy, Suspense } from "react";
const Navbar = lazy(() => import('./components/navbar/Navbar.jsx'));
const Footer = lazy(() => import('./components/footer/Footer.jsx'));

export default function Root() {
    return (
       
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>

    )
}