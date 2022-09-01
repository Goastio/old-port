import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import unDraw from "../images/unDraw.svg";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

AOS.init();

function About({ setIsActive }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsActive("About");
    }
  }, [inView]);

  return (
    <>
      <div
        ref={ref}
        id="about"
        className="flex flex-col bg-[#1A1A1A] min-h-screen p-10"
      >
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-full flex items-center justify-center font-bold tracking-tight text-5xl text-white p-5"
        >
          About
        </div>

        <div className="flex md:flex-row flex-col w-full items-center text-white">
          <div className="bg-white bg-opacity-10 flex flex-col w-3/4 rounded-md">
            <div className="flex justify-center p-5">
              <img src={unDraw} className="w-60" alt="" />
            </div>
            <div className="flex leading-8 rounded-md text-base md:text-xl p-5">
              Originally born and raised just outside of north-west Chicago, IL.
              Currently residing just south of Tampa, FL. I love building web
              applications and websites with React, and Tailwind. I look forward
              to furthering my education in the development world.
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center md:text-5xl text-4xl text-white gap-5 py-5">
            <div className="flex flex-row gap-10">
              <div className="flex p-2.5 bg-white bg-opacity-10 rounded-md">
                <SiHtml5 />
              </div>
              <div className="flex p-2.5 bg-white bg-opacity-10 rounded-md">
                <SiCss3 />
              </div>
              <div className="flex p-2.5 bg-white bg-opacity-10 rounded-md">
                <SiJavascript />
              </div>
              <div className="flex p-2.5 bg-white bg-opacity-10 rounded-md">
                <SiReact />
              </div>
            </div>
            <div className="flex flex-row gap-10">
              <div className="flex p-2.5 bg-white bg-opacity-10 rounded-md">
                <SiTailwindcss />
              </div>
              <div className="flex p-2.5 bg-white bg-opacity-10 rounded-md">
                <SiNodedotjs />
              </div>
              <div className="flex p-2.5 bg-white bg-opacity-10 rounded-md">
                <SiExpress />
              </div>
              <div className="flex p-2.5 bg-white bg-opacity-10 rounded-md">
                <SiMongodb />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
