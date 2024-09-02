import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import logo from "../../assets/logos/logo2.png";
import "./NavBar.scss";

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // function to close navbar when clicked outside of the contents (mobile navbar)
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Hamburger menu logic to drop menu
  const handleHamburgerClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setDropdownOpen(false);
  };

  // MotionFramer Properties
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className={isDropdownOpen ? "navbar navbar--white" : "navbar"}
      ref={navbarRef}
    >
      <div className="navbar-container">
        <img className="navbar-container__logo" src={logo} alt="Logo" />
        <div
          className="navbar-container__hamburger"
          onClick={handleHamburgerClick}
        >
          {isDropdownOpen ? <IoCloseOutline size={38} /> : <RxHamburgerMenu />}
        </div>
        <ul className="navbar-container__tablet-nav">
          {["Home", "About Us", "Reviews", "Gallery", "Contact", "Booking"].map(
            (item, index) => (
              <li key={index}>
                {item === "Booking" ? (
                  <a
                    href="https://www.dashbooking.com/salon/nails-4-life"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    {item}
                  </a>
                ) : (
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-100}
                    duration={500}
                    onClick={handleLinkClick}
                  >
                    {item}
                  </Link>
                )}
              </li>
            )
          )}
        </ul>
      </div>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.ul
            className="navbar-list"
            variants={{visible: { opacity: 1, y: 0 },}}
            initial={{opacity: 0}}
            animate="visible"
          >
            {[
              "Home",
              "About Us",
              "Reviews",
              "Gallery",
              "Contact",
              "Booking",
            ].map((item, index) => (
              <motion.li
                key={item}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 + 0.2 }}
              >
                {item === "Booking" ? (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.dashbooking.com/salon/nails-4-life"
                    onClick={handleLinkClick}
                  >
                    <p className="navbar-list__item">{item}</p>
                  </a>
                ) : (
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-100}
                    duration={500}
                    onClick={handleLinkClick}
                  >
                    <p className="navbar-list__item">{item}</p>
                  </Link>
                )}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
