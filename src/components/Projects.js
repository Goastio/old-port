import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import blackjack from "../images/blackjack_pic.jpg";
import redditapp from "../images/reddit_app.png";
import { SiGithub, SiTeratail } from "react-icons/si";
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
        className="flex md:p-10 flex-col bg-[#161616] py-5"
      >
        <div className="flex flex-col w-full justify-center min-h-min mx-auto">
          <div className="flex md:w-3/5 w-3/4 mx-auto flex-col text-white gap-5">
            <div className="flex w-full flex-col md:flex-row justify-center p-5 bg-white bg-opacity-10 rounded-md">
              <div className="flex flex-col justify-center items-center w-full gap-2.5 md:gap-5">
                <span className="text-sm md:text-lg"> Reddit Browser </span>
                <div className="flex flex-col w-full items-center pb-5">
                  <span className="md:text-base text-xs">Developed using</span>
                  <div className="flex">
                    <span className="text-[#0794E0]">React</span> &nbsp; &
                    &nbsp;
                    <span className="text-[#0794E0]">Tailwind</span>
                  </div>
                </div>
                <div className="flex gap-5 pb-5 text-xs items-center">
                  <a
                    className="flex items-center gap-1 bg-white bg-opacity-10 hover:bg-opacity-5 transition p-2.5 rounded-md"
                    href="/reddit-browser"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiTeratail />
                    Live
                  </a>
                  <a
                    className="flex items-center gap-1 bg-white bg-opacity-10 hover:bg-opacity-5 transition p-2.5 rounded-md"
                    href="https://github.com/Goastio/reddit-browser"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiGithub />
                    Github
                  </a>
                </div>
              </div>

              <div className="hover:scale-95 transition duration-100">
                <a href="/reddit-browser" target="_blank" rel="noreferrer">
                  <img
                    data-aos="fade-right"
                    src={redditapp}
                    alt=""
                    className="h-full w-[100rem]"
                  />
                </a>
              </div>
            </div>

            <div className="flex w-full flex-col md:flex-row justify-center p-5 bg-white bg-opacity-10 rounded-md">
              <div className="flex flex-col justify-center items-center w-full gap-2.5 md:gap-5">
                <span className="text-sm md:text-lg">Blackjack</span>
                <div className="flex flex-col w-full items-center pb-5">
                  <span className="md:text-base text-xs">Developed using</span>
                  <div className="flex">
                    <span className="text-[#0794E0]">React</span> &nbsp; &
                    &nbsp;
                    <span className="text-[#0794E0]">Tailwind</span>
                  </div>
                </div>

                <div className="flex gap-5 pb-5 text-xs items-center">
                  <a
                    className="flex items-center gap-1 bg-white bg-opacity-10 hover:bg-opacity-5 transition p-2.5 rounded-md"
                    href="/blackjack"
                  >
                    <SiTeratail />
                    Live
                  </a>
                  <a
                    className="flex items-center gap-1 bg-white bg-opacity-10 hover:bg-opacity-5 transition p-2.5 rounded-md"
                    href="https://github.com/Goastio/blackjack-react"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiGithub />
                    Github
                  </a>
                </div>
              </div>

              <div className="hover:scale-95 transition duration-100">
                <a href="/blackjack" target="_blank" rel="noreferrer">
                  <img
                    data-aos="fade-right"
                    src={blackjack}
                    alt=""
                    className="h-full w-[100rem]"
                  />
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
