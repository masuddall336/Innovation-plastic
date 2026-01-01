import React, { useEffect, useState } from "react";
import "./Footer.css";
import logo from "../../../public/logo/IPCL_logo_with_name.png";
import Call_icon from "../../../public/icon/phone-call.png"
import facebook_icon from "../../../public/icon/facebook.png"
import linkdin_icon from "../../../public/icon/linkDin.png"
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
const Footer = () => {
  const [openMenu, setOpenMenu] = useState({});

  useEffect(() => {
    const bottles = document.querySelectorAll(".footer-plastic-bottle");
    const gears = document.querySelectorAll(".footer-gear");

    bottles.forEach((bottle, index) => {
      bottle.style.animation = `footer-floatBottle ${3 + index * 0.5}s ease-in-out infinite alternate`;
    });

    gears.forEach((gear, index) => {
      gear.style.animation = `footer-rotateGear ${15 + index * 5}s linear infinite`;
    });
  }, []);

  const isMobile = () => window.innerWidth <= 768;

  const toggleSubmenu = (key) => {
    if (isMobile()) {
      setOpenMenu((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    }
  };

  return (
    <div>
      <div className="footer-container">
        <div className="footer-bg">
          {/* Background factory elements */}
          <div className="footer-factory-shape footer-shape-1" />
          <div className="footer-factory-shape footer-shape-2" />
          <div className="footer-factory-shape footer-shape-3" />

          <div className="footer-conveyor-line footer-line-1" />
          <div className="footer-conveyor-line footer-line-2" />

          <div className="footer-gear footer-gear-1" />
          <div className="footer-gear footer-gear-2" />
          <div className="footer-gear footer-gear-3" />

          <div className="footer-plastic-bottle footer-bottle-1" />
          <div className="footer-plastic-bottle footer-bottle-2" />
          <div className="footer-plastic-bottle footer-bottle-3" />
          <div className="footer-plastic-bottle footer-bottle-4" />
          <div className="footer-plastic-bottle footer-bottle-5" />
          <div className="footer-plastic-bottle footer-bottle-6" />
          <div className="footer-plastic-bottle footer-bottle-7" />

          {/* Footer Content */}
          <div className="footer-content">
            {/* Logo */}
            <div className="footer-column">
              <img className="footer-logo" src={logo} alt="Company Logo" />
            </div>

            {/* Services */}
            <div className="footer-column">
              <h3>Services</h3>
              <ul className="footer-menu">
                <li>
                  <div
                    className="footer-menu-title"
                    onClick={() => toggleSubmenu("manufacturing")}
                  >
                    Manufacturing
                    {/* <span
                      className={`footer-li-arrow ${openMenu["manufacturing"] ? "active" : ""}`}
                    ></span> */}
                  </div>
                  {/* <ul className={`footer-submenu ${openMenu["manufacturing"] ? "open" : ""}`}>
                    <li><a href="#">Injection Molding</a></li>
                    <li><a href="#">Blow Molding</a></li>
                    <li><a href="#">Custom Design</a></li>
                  </ul> */}
                </li>

                <li>
                  <div
                    className="footer-menu-title"
                    onClick={() => toggleSubmenu("packaging")}
                  >
                    Packaging
                    {/* <span
                      className={`footer-li-arrow ${openMenu["packaging"] ? "active" : ""}`}
                    ></span> */}
                  </div>
                  {/* <ul className={`footer-submenu ${openMenu["packaging"] ? "open" : ""}`}>
                    <li><a href="#">Food Packaging</a></li>
                    <li><a href="#">Industrial Packaging</a></li>
                  </ul> */}
                </li>

                <li>
                  <div
                    className="footer-menu-title"
                    onClick={() => toggleSubmenu("logistics")}
                  >
                    Logistics
                    {/* <span
                      className={`footer-li-arrow ${openMenu["logistics"] ? "active" : ""}`}
                    ></span> */}
                  </div>
                  {/* <ul className={`footer-submenu ${openMenu["logistics"] ? "open" : ""}`}>
                    <li><a href="#">Warehousing</a></li>
                    <li><a href="#">Distribution</a></li>
                    <li><a href="#">Export Support</a></li>
                  </ul> */}
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul className="footer-menu">
                <li>
                  <div
                    className="footer-menu-title"
                    onClick={() => toggleSubmenu("about")}
                  >
                    About Us
                    <span
                      className={`footer-li-arrow ${openMenu["about"] ? "active" : ""}`}
                    ></span>
                  </div>
                  <ul className={`footer-submenu ${openMenu["about"] ? "open" : ""}`}>
                    <li><a href="#">Company Profile</a></li>
                    <li><a href="#">Our Team</a></li>
                  </ul>
                </li>

                <li>
                  <div
                    className="footer-menu-title"
                    onClick={() => toggleSubmenu("products")}
                  >
                    Products
                    <span
                      className={`footer-li-arrow ${openMenu["products"] ? "active" : ""}`}
                    ></span>
                  </div>
                  <ul className={`footer-submenu ${openMenu["products"] ? "open" : ""}`}>
                    <li><a href="#">Food Containers</a></li>
                    <li><a href="#">Bottles</a></li>
                    <li><a href="#">Industrial Cans</a></li>
                  </ul>
                </li>

                <li>
                  <div
                    className="footer-menu-title"
                    onClick={() => toggleSubmenu("careers")}
                  >
                    Careers
                    <span
                      className={`footer-li-arrow ${openMenu["careers"] ? "active" : ""}`}
                    ></span>
                  </div>
                  <ul className={`footer-submenu ${openMenu["careers"] ? "open" : ""}`}>
                    <li><a href="#">Job Openings</a></li>
                    <li><a href="#">Internships</a></li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-column">
              <h3>Contact Us</h3>
              <h4 className="footer-company-name">Innovation Plastic Cans Ltd.</h4>
              <p>Sena Kalyan Bhaban (14th Floor), 195 Motijheel C/A, Dhaka-1000, Bangladesh</p>
              <p>Phone: +88-02-223382144, +88-02-223382446, +88-01700-760208</p>
              <p>Email: info@innovation-plastic.com</p>
              <div className="social Icons">
                {/* SOCIAL ICONS */}
                <div id="Social_icons" className="flex gap-3 ml-[30%] md:ml-0">
                  <a href="tel:+88-01700-760511"><img className="w-7 bg-white p-1" src={Call_icon} alt="" /></a>
                  <a href="https://www.facebook.com/share/1BRWKkPB49/?mibextid=wwXIfr" target='_blenk'><img className="w-7 bg-white p-1" src={facebook_icon} alt="" /></a>
                  <a href="#"><img className="w-7 bg-white p-1" src={linkdin_icon} alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright flex justify-center flex-wrap items-center ">
        <p className="">© 2025 Innovation Plastic Cans Ltd. All rights reserved. |</p> <Link to='sitemap' className="text-amber-50 font-bold font-extrabold text-1xl ml-1"> Sitemap</Link>
      </div>
    </div>

  );
};

export default Footer;
