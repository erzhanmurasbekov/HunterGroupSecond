import React, { useEffect, useState } from "react";
import { FaBars, FaXmark, FaArrowUp } from "react-icons/fa6";
import { Link as Linker, useNavigate } from "react-router-dom";
import hunterlogo from "../assets/hunterlogo.png";
import AgeModal from "../components/Modal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [showScrollButton, setShowScrollButton] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    handleScrollToTop();
    const isOldEnough = sessionStorage.getItem("isOldEnough");
    if (isOldEnough === "true") {
      setShowModal(false);
    }
    const handleScroll = () => {
      if (window.scrollY > 100) {
        
        setShowScrollButton(true);
      } else {
        
        setShowScrollButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleYes = () => {
    sessionStorage.setItem("isOldEnough", "true");
    setShowModal(false);
  };

  const handleNo = () => {
    window.location.href = "https://www.google.com"; // Redirect if user is not 18+
  };

  const handleNavClick = (path) => {
    navigate("/");
    setTimeout(() => {
      const scroll = document.getElementById(path);
      if (scroll) {
        scroll.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to ensure navigation to home page first
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { link: "Главная", path: "" },
    { link: "Продукты", path: "product" },
    { link: "Напишите нам", path: "contact" },
  ];

  return (
    <>
      <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 z-50">
        <nav
          className={`py-4 lg:px-14 px-4 sticky top-0 left-0 right-0 border-b bg-white duration-300$`}>
          <div className="flex justify-between items-center text-base gap-8">
            <Linker
              to="/"
              className="text-2xl font-semibold flex items-center space-x-3">
              <img
                src={hunterlogo}
                alt=""
                className="w-32 inline-block items-center"
              />
            </Linker>

            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }, idx) => (
                <Linker to={`/${path}`} key={idx}>
                  <li
                    key={idx}
                    className="block text-base text-gray900 hover:text-brandPrimary first:font-medium cursor-pointer">
                    <button onClick={() => handleNavClick(path)}>{link}</button>
                  </li>
                </Linker>
              ))}
            </ul>
            <div className="md:hidden">
              <button
                className="focus:outline-none focus:text-gray-500"
                onClick={toggleMenu}>
                {isMenuOpen ? (
                  <FaXmark className="h-6 w-6 text-neutralDGrey" />
                ) : (
                  <FaBars className="h-6 w-6 text-neutralDGrey" />
                )}
              </button>
            </div>
          </div>
          <div
            className={`fixed inset-x-0 top-0 z-40 p-4 bg-brandPrimary transition-transform transform ${
              isMenuOpen ? "translate-y-[90px]" : "-translate-y-full"
            }`}
            style={{ transitionDuration: "300ms" }}>
            <div className="flex justify-between items-center"></div>
            <div className=" space-y-4">
              {navItems.map(({ link, path }, idx) => (
                <Linker
                  key={idx}
                  to={`/${path}`}
                  className="block text-base text-white hover:text-brandPrimary first:font-medium cursor-pointer">
                  <button
                    key={path}
                    onClick={() => {
                      handleNavClick(path);
                      setIsMenuOpen(false);
                    }}>
                    {link}
                  </button>
                </Linker>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <button
        onClick={handleScrollToTop}
        className={`fixed bottom-4 right-4 p-2 bg-brandPrimary text-white rounded-full shadow-lg hover:bg-brandPrimary-dark focus:outline-none focus:ring-2 focus:ring-brandPrimary focus:ring-opacity-75 transition-opacity transform ${
          showScrollButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
        style={{ transition: "opacity 0.3s, transform 0.3s" }}>
        <FaArrowUp className="z-10 h-6 w-6" />
      </button>
      <AgeModal
        showModal={showModal}
        handleYes={handleYes}
        handleNo={handleNo}
      />
    </>
  );
};

export default Navbar;
