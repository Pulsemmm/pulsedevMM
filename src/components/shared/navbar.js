// Navbar.js
import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "./button";
import { logoLg } from "../content/data";
import LazyLoadedImage from "./lazyLoadedImage";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [smMenu, setSmMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const shouldCustomNav = ["/book-consultant"].includes(location.pathname);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  const toggleMenu = () => {
    setSmMenu(!smMenu);
  };
  const handleNavigation = (link) => {
    navigate(link);
    setDropdown(false);
  };
  const handleNavigationSm = (link) => {
    navigate(link);
    setSmMenu(false);
  };

  // useEffect(() => {
  //   document.body.addEventListener("click", handleBodyClick);

  //   return () => {
  //     document.body.removeEventListener("click", handleBodyClick);
  //   };
  // }, []);

  // const handleBodyClick = () => {
  //   if (dropdown === true) {
  //     setDropdown(false);
  //   }
  // };

  return (
    <>
      <div className="d-md-block d-none">
        <nav
          className={`navbar w-100 v-center pulse-navbar ${
            shouldCustomNav ? "no-after" : ""
          } `}
        >
          <NavLink className="navbar-brand " to="/">
            <LazyLoadedImage
              src={logoLg}
              alt="pulse logo"
              className="img-fluid"
            />
          </NavLink>

          <ul className="navbar-nav d-flex flex-row v-center text-white">
            <li className="nav-item">
              <NavLink
                className="nav-link "
                aria-current="page"
                to="/"
                onClick={() => setDropdown(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about-us"
                onClick={() => setDropdown(false)}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="nav-item dropdown">
                <span className="nav-link d-flex gap-2 align-items-center">
                  <NavLink
                    className="nav-link"
                    to="/our-services"
                    onClick={() => setDropdown(false)}
                  >
                    Our Services
                  </NavLink>

                  <img
                    src="/assets/icons/navicon.svg"
                    alt="..."
                    style={{
                      cursor: "pointer",
                      width: "13.333px",
                      height: "9.982px",
                    }}
                    onClick={toggleDropdown}
                  />
                </span>
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/portfolio"
                onClick={() => setDropdown(false)}
              >
                Portfolio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/crm"
                onClick={() => setDropdown(false)}
              >
                CRM
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/book"
                onClick={() => setDropdown(false)}
              >
                Book
              </NavLink>
            </li>
          </ul>

          <Button
            text="Contact Us"
            width="150px"
            height="40px"
            className="btn-primary text-white"
            onClick={() => handleNavigation("/contact-us")}
          >
            Contact us
          </Button>
        </nav>

        <div className="services-dropdown-container">
          <div className={`services-dropdown ${dropdown ? "open" : ""}`}>
            <div className="dropdown-content">
              <ul>
                <li
                  onClick={() => handleNavigation("/photography_videography")}
                  className="d-none"
                >
                  <a>Content Creator</a>
                </li>
                <li
                  onClick={() => handleNavigation("/service/web-development")}
                >
                  <a>Web Development</a>
                </li>
                <li
                  onClick={() =>
                    handleNavigation(
                      "/service/branding-logos-design-graphic-design-packages"
                    )
                  }
                >
                  <a>Branding Packages</a>
                </li>
                <li
                  onClick={() =>
                    handleNavigation("/service/applications-development")
                  }
                >
                  <a>App Development</a>
                </li>
                <li
                  onClick={() =>
                    handleNavigation(
                      "/service/orm-online-reputation-management"
                    )
                  }
                  className="d-none"
                >
                  <a>ORM (Online Reputation Management )</a>
                </li>
                <li
                  onClick={() =>
                    handleNavigation("/service/search-engine-optimization")
                  }
                >
                  <a>Search Engine Optimization </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-navbar d-md-none d-block">
        <div className="top">
          <NavLink className="navbar-brand " to="/">
            <LazyLoadedImage
              src={logoLg}
              alt="pulse logo"
              className="img-fluid mobile-logo "
            />
          </NavLink>
          <Icon
            className="mobile-menu"
            icon="ri:menu-4-fill"
            color="white"
            width="30"
            height="30"
            onClick={toggleMenu}
          />
        </div>

        <div className={` mobile-sidebar  ${smMenu ? "open" : ""} `}>
          <div className="d-flex align-items-center justify-content-between">
            <LazyLoadedImage
              src={logoLg}
              alt="pulse logo"
              className="  mobile-logo  w-50"
            />
            <Icon
              icon="maki:cross"
              color="white"
              className="side-menu ms-0 mb-0"
              onClick={toggleMenu}
            />
          </div>
          <div className="side-icons mt-5">
            <ul>
              <li className="nav-item" onClick={() => handleNavigationSm("/")}>
                <a className="nav-link " aria-current="page">
                  Home
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => handleNavigationSm("/about-us")}
              >
                <a className="nav-link " aria-current="page">
                  About us
                </a>
              </li>
              <li className="nav-item services-side">
                <div className="services-top">
                  <a
                    className="nav-link "
                    aria-current="page"
                    onClick={() => handleNavigationSm("/our-services")}
                  >
                    Our Services
                  </a>

                  <Icon
                    icon="ic:baseline-plus"
                    color="white"
                    width="30"
                    height="30"
                    onClick={toggleDropdown}
                  />
                </div>
                {dropdown ? (
                  <div className="services-bottom">
                    <ul>
                      <li
                        onClick={() => handleNavigationSm("/content-creator")}
                        className="d-none"
                      >
                        <a>Content Creator</a>
                      </li>
                      <li
                        onClick={() =>
                          handleNavigationSm("/service/web-development")
                        }
                      >
                        <a>Web Development</a>
                      </li>
                      <li
                        onClick={() =>
                          handleNavigationSm(
                            "/service/branding-logos-design-graphic-design-packages"
                          )
                        }
                      >
                        <a>Branding Pakages</a>
                      </li>
                      <li
                        onClick={() =>
                          handleNavigationSm(
                            "/service/applications-development"
                          )
                        }
                      >
                        <a>App Development</a>
                      </li>
                      <li
                        onClick={() => handleNavigationSm("/orm")}
                        className="d-none"
                      >
                        <a>ORM (Online Reputation Management )</a>
                      </li>
                      <li onClick={() => handleNavigationSm("/seo")}>
                        <a>Search Engine Optimization </a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
              </li>
              <li
                className="nav-item"
                onClick={() => handleNavigationSm("/portfolio")}
              >
                <a className="nav-link " aria-current="page">
                  Portfolio
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => handleNavigationSm("/book-consultant")}
              >
                <a className="nav-link">Book</a>
              </li>
              <li
                className="nav-item"
                onClick={() => handleNavigationSm("/contact-us")}
              >
                <a className="nav-link" to="/contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
