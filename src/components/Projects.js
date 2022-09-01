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
    threshold: 0.3,
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
        className="flex md:p-10 flex-col bg-[#1A1A1A]"
      >
        <div className="w-full flex justify-center pt-10 font-bold tracking-tight text-5xl text-white">
          Projects
        </div>
        <div className="flex flex-col w-full min-h-screen mx-auto py-5 md:p-10">
          <div className="flex w-3/4 mx-auto flex-col text-white gap-5">
            <div className="flex w-full flex-col md:flex-row justify-center p-5 bg-white bg-opacity-10">
              <div className="flex flex-col justify-center items-center w-full gap-2.5 md:gap-5">
                <span className="text-sm md:text-lg"> Reddit Browser </span>
                <div className="flex flex-col w-full items-center">
                  <span className="md:text-base text-xs">Developed using</span>
                  <div className="flex">
                    <span className="text-[#0794E0]">React</span> &nbsp; &
                    &nbsp;
                    <span className="text-[#0794E0]">Tailwind</span>
                  </div>
                </div>
              </div>
              <div className="hover:scale-95 transition duration-100">
                <a href="/reddit-browser">
                  <img data-aos="fade-right" src={redditapp} alt="" />
                </a>
              </div>
            </div>

            <div className="flex w-full flex-col md:flex-row justify-center p-5 bg-white bg-opacity-10">
              <div className="flex flex-col justify-center items-center w-full gap-2.5 md:gap-5">
                <span className="text-sm md:text-lg">Blackjack</span>
                <div className="flex flex-col w-full items-center">
                  <span className="md:text-base text-xs">Developed using</span>
                  <div className="flex">
                    <span className="text-[#0794E0]">React</span> &nbsp; &
                    &nbsp;
                    <span className="text-[#0794E0]">Tailwind</span>
                  </div>
                </div>
              </div>
              <div className="hover:scale-95 transition duration-100">
                <a href="/reddit-browser">
                  <img data-aos="fade-right" src={blackjack} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
