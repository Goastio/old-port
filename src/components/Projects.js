import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import blackjack from "../images/blackjack_pic.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Projects({ setIsActive }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsActive("Projects");
    }
  }, [inView]);

  return (
    <>
      <div
        ref={ref}
        id="projects"
        className="min-h-screen w-full bg-[#1A1A1A] text-white p-10"
      >
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl md:text-5xl w-full flex items-center justify-center font-bold tracking-tight"
        >
          Projects
        </div>

        <div className="flex flex-col w-full text-white ">


          <div className="flex w-full justify-center">
            <div
              data-aos="fade-left"
              className="flex items-center justify-center font-medium"
            >
              Reddit Browser
            </div>
            <div className="hover:scale-95 transition duration-100">
              <a href="/reddit-browser">
                <img
                  data-aos="fade-right"
                  src={blackjack}
                  alt=""
                />
              </a>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="flex items-center justify-center"
          >
            Blackjack
          </div>
          <div className="hover:scale-95 transition duration-100">
            <a href="/blackjack">
              <img data-aos="fade-left" src={blackjack} alt="" />
            </a>
          </div>



        </div>
      </div>
    </>
  );
}

export default Projects;
