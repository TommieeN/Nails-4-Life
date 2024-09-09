import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import logo from "../../assets/logos/logo2.png";
import "./NavBar.scss";

const NavBar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    /**
     * Closes the mobile navbar when clicking outside of it.
     * `navbarRef` references the nav container, so any clicks outside will trigger the close.
     */
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    // Attach the event listener on component mount
    document.addEventListener("click", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Toggles the dropdown menu on hamburger icon click
  const handleHamburgerClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown when a link is clicked
  const handleLinkClick = () => {
    setDropdownOpen(false);
  };

  // Variants for framer-motion animations (to animate list items when dropdown opens)
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
                    href="https://www.dashbooking.com/salon/nails-4-life/booking"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book an appointment online"
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
                    aria-label={`navigate to ${item} section`}
                  >
                    {item}
                  </Link>
                )}
              </li>
            )
          )}
        </ul>
      </div>
      
      {/* Dropdown Menu for smaller screens */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.ul
            className="navbar-list"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
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
                transition={{ delay: index * 0.2 }}
              >
                {item === "Booking" ? (
                  <a
                    href="https://www.dashbooking.com/salon/nails-4-life/booking"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book an appointment online"
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
