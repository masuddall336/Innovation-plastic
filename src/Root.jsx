import { Outlet, } from "react-router-dom";
import { lazy, Suspense } from "react";
const Navbar = lazy(() => import('./components/navbar/Navbar.jsx'));
const Footer = lazy(() => import('./components/footer/Footer.jsx'));

export default function Root() {
    return (
        <Suspense fallback={<div className=" absolute left-[45%] top-[50%] text-[#280d9e] text-2xl">Loading...</div>}>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </Suspense>

    )
}