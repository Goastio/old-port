import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import blackjack from "../images/blackjack_pic.jpg";
import redditapp from "../images/reddit_app.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Projects({ setIsActive }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsActive("Projects");
    }
  }, [inView]);

  return (
    <>
      <div ref={ref} id="projects" className="flex p-10 flex-col bg-[#1A1A1A]">
        <div className="w-full flex justify-center font-bold tracking-tight text-5xl text-white">
          Projects
        </div>
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-col w-full text-white">
            <div className="flex w-full justify-center">
              <div
                data-aos="fade-left"
                className="flex items-center justify-center font-medium"
              >
                Reddit Browser
              </div>
              <div className="hover:scale-95 transition duration-100">
                <a href="/reddit-browser">
                  <img data-aos="fade-right" src={redditapp} alt="" />
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
      </div>
    </>
  );
}

export default Projects;
