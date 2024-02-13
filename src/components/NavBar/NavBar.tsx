import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logos/logo2.svg";
import "./NavBar.scss";

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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

  const handleHamburgerClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setDropdownOpen(!isDropdownOpen);
  };

  // MotionFramer Properties
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-container">
        <img className="navbar-container__logo" src={logo} alt="Logo" />
        <div onClick={handleHamburgerClick}>
          {isDropdownOpen ? <IoCloseOutline size={38} /> : <RxHamburgerMenu />}
        </div>
      </div>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.ul
            className="navbar-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {["Home", "Booking", "Services", "About Us"].map((item, index) => (
              <motion.li
                key={item}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 + 0.2 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
