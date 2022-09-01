import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
AOS.init();

function Main({ isActive, setIsActive }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsActive("Home");
    }
  }, [inView]);

  function scrollFunction() {
    let e = document.getElementById("projects");
    e.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  }

  return (
    <>
      <div
        ref={ref}
        id="home"
        className="min-h-screen justify-center flex  flex-col w-full bg-[#1A1A1A]"
      >
        <div
          data-aos="fade-right"
          data-aos-delay="150"
          className="text-5xl text-center tracking-tight font-thin text-white"
        >
          Hello, I'm <span className="text-[#0794E0]">Brandon</span>
          <div
            data-aos="fade-left"
            data-aos-delay="150"
            className="text-center text-4xl font-thin"
          >
            I'm a front-end web developer
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="150" className="text-center py-5">
          <button
            onClick={scrollFunction}
            href="#_"
            className="relative inline-flex items-center justify-start transition-all bg-[#0794E0] rounded-sm hover:bg-[#1A1A1A] group"
          >
            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-[#1A1A1A]"></span>
            <span className="relative w-full text-left text-[#1A1A1A] transition-colors duration-200 ease-in-out group-hover:text-[#0794E0] md:text-xl font-light px-2.5 py-1 rounded-md">
              View my work
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Main;
