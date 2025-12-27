import './Navbar.css'

// logo and icons imports
import logo from '../../../public/logo/IPCL_logo.png'
import logo_name from '../../../public/logo/IPCL_name_logo.png'
import call from '../../../public/icon/phone-call.png'
import facebook from '../../../public/icon/facebook.png'
import linkdin from '../../../public/icon/linkDin.png'
import threeline from '../../../public/icon/threeLine.png'
import crossIcon from '../../../public/icon/crossicon.jpg'

import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [aboutOpen, setAboutOpen] = useState(false)
    const [responsiveOpen, setResponsiveOpen] = useState(false)

    const hoverDiv = useRef(null)
    const menuRef = useRef(null)
    const location = useLocation()
    const [activeItem, setActiveItem] = useState(null)

    const closeResponsive = () => {
        setResponsiveOpen(false)
        setAboutOpen(false)
    }

    const updateHoverDiv = (item) => {
        if (!item || !hoverDiv.current) return
        const rect = item.getBoundingClientRect()
        const navRect = item.parentElement.getBoundingClientRect()
        hoverDiv.current.style.width = `${rect.width}px`
        hoverDiv.current.style.left = `${rect.left - navRect.left}px`
    }

    useEffect(() => {
        const navItems = menuRef.current?.querySelectorAll('.nav_main > a')
        const handleHover = (e) => updateHoverDiv(e.currentTarget)
        const handleLeave = () => updateHoverDiv(activeItem)

        navItems?.forEach(item => {
            item.addEventListener('mouseenter', handleHover)
            item.addEventListener('mouseleave', handleLeave)
            item.addEventListener('click', () => setActiveItem(item))
        })

        const current = Array.from(navItems || []).find(
            item => item.getAttribute('href') === location.pathname
        )
        setActiveItem(current)
        updateHoverDiv(current)

        return () => {
            navItems?.forEach(item => {
                item.removeEventListener('mouseenter', handleHover)
                item.removeEventListener('mouseleave', handleLeave)
            })
        }
    }, [location.pathname, activeItem])

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div>
            {/* Overlay */}
            <div
                className={`overlay ${responsiveOpen ? 'show' : ''}`}
                onClick={closeResponsive}
            ></div>

            {/* NAVBAR */}
            <nav className={`fixed left-1/2 transform -translate-x-1/2 z-20 flex justify-between items-center 
                transition-all duration-500 absolute
                ${scrolled ? 'top-0 w-full rounded-none bg-white shadow-lg' : 'top-11 w-[90%] rounded-xl bg-white'}`}>

                {/* THREE LINE ICON */}
                <div id="threeline" className="pl-2 relative">
                    <img
                        onClick={() => setResponsiveOpen(true)}
                        className="w-8"
                        src={threeline}
                        alt="menu"
                    />
                </div>

                {/* MOBILE MENU */}
                <div id="responsive" className={responsiveOpen ? 'show' : ''}>
                    <div id="cross_icon" onClick={closeResponsive}>
                        <img className="w-7" src={crossIcon} alt="close" />
                    </div>

                    <div id="logo_part">
                        <img src={logo} alt="logo" />
                    </div>

                    <ul id='reponsive_ul' className=''>
                        <Link to="/" onClick={closeResponsive}><li>Home</li></Link>
                        <Link to="/Sustainability" onClick={closeResponsive}><li>Sustainability</li></Link>
                        <Link to="/products" onClick={closeResponsive}><li>Product</li></Link>
                        <Link to="/Gallery" onClick={closeResponsive}><li>Gallery</li></Link>
                        <a id='about_respon' className='about_a '>
                            <li className="mobile_about  relative" onClick={() => setAboutOpen(!aboutOpen)}>
                                About
                                <span className={`arrow ${aboutOpen ? 'down' : ''}`}></span>
                                <ul className={`mobile_about_ul  ${aboutOpen ? 'open' : ''}`}>
                                    <Link to="/Qc_Qa" onClick={closeResponsive}><li>QC & QA</li></Link>
                                    <Link to="/Contact_us" onClick={closeResponsive}><li className=''>Contact Us</li></Link>
                                </ul>
                            </li>

                        </a>

                    </ul>
                </div>

                {/* LOGO */}
                <div id="company_logo" className="flex items-center">
                    <Link to="">
                        <img className="w-36" src={logo} alt="logo" />
                    </Link>
                    <img className="w-76 name_logo" src={logo_name} alt="name" />
                </div>

                {/* DESKTOP NAV */}
                <div ref={menuRef} className="relative main_nav Full_size">
                    <ul className="flex gap-4 items-center nav_main relative">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/Sustainability"><li>Sustainability</li></Link>
                        <Link to="/products"><li>Product</li></Link>
                        <Link to="/Gallery"><li>Gallery</li></Link>

                        <a className="about" href="#about_us">
                            <li>
                                About
                                <ul className="about_ul">
                                    <Link to="/Qc_Qa"><li>QC & QA</li></Link>
                                    <Link to="/Contact_us"><li>Contact Us</li></Link>
                                </ul>
                            </li>
                        </a>
                    </ul>
                    <span ref={hoverDiv} id="hover_div"></span>
                </div>

                {/* SOCIAL ICONS */}
                <div id="Social_icons" className="flex gap-3 ml-3">
                    <a href="tel:+88-01700-760511"><img className="w-7 bg-white p-1" src={call} alt="" /></a>
                    <a href="https://www.facebook.com/share/1BRWKkPB49/?mibextid=wwXIfr" target='_blenk'><img className="w-7 bg-white p-1" src={facebook} alt="" /></a>
                    <a href="#"><img className="w-7 bg-white p-1" src={linkdin} alt="" /></a>
                </div>

            </nav>
        </div>
    )
}
