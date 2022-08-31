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
      <div className="p-5 w-full bg-[#262626] flex shadow-lg sticky z-10 top-0 md:opacity-95">
        <div className="flex w-full justify-center items-center font-medium gap-5 text-white md:justify-end md:items-center">
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
                    ? "text-[#0794E0] transition duration-300 text-xl"
                    : "hover:text-[#0794E0] transition duration-300 text-xl"
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
