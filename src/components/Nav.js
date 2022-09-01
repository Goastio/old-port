import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Main from "./Main";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useInView } from "react-intersection-observer";
AOS.init();

function Nav({ isActive, setIsActive }) {
  const { ref } = useInView({
    threshold: 0.1,
  });

  const navLinks = [
    {
      linkText: "Home",
      url: "/",
      directory: <Main />,
    },
    {
      linkText: "About",
      url: "/about",
      directory: <About />,
    },
    {
      linkText: "Projects",
      url: "/projects",
      directory: <Projects />,
    },
    {
      linkText: "Contact",
      url: "/contact",
      directory: <Contact />,
    },
  ];

  return (
    <>
      <div className="flex p-2.5 md:p-5 fixed items-center w-full bg-[#1A1A1A] z-10 bg-opacity-95 shadow-md">
        <div className="flex w-full gap-5 text-white justify-center md:justify-end">
          {navLinks.map((navLink) => {
            return (
              <Link
                ref={ref}
                onClick={(x) => {
                  x.preventDefault();
                  setIsActive(navLink.linkText);
                  let e = document.getElementById(
                    navLink.linkText.toLowerCase()
                  );
                  e.scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                    inline: "start",
                  });
                }}
                key={navLink.url}
                to={navLink.url}
                className={
                  isActive === navLink.linkText
                    ? "text-[#0794E0] transition duration-300 md:text-xl text-base"
                    : "hover:text-[#0794E0] transition duration-300 md:text-xl text-base"
                }
              >
                {navLink.linkText}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Nav;
