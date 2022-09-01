import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Contact({ setIsActive }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsActive("Contact");
    }
  }, [inView]);
  return (
    <>
      <section ref={ref} id="contact" class="bg-[#1e1e1e]">
        <div class="py-10 lg:py-20 px-5 mx-auto max-w-screen-sm">
          <h2 class="mb-5 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
            Get in touch
          </h2>
          <form action="#" class="space-y-10">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="text-sm rounded-md w-full p-2.5 bg-white bg-opacity-10 hover:cursor-pointer dark:placeholder-neutral-500 focus:cursor-default text-white outline-hidden focus:outline outline-2 transition"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-white"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="text-sm rounded-md w-full p-2.5 bg-white bg-opacity-10 hover:cursor-pointer dark:placeholder-neutral-500 focus:cursor-default text-white outline-hidden focus:outline outline-2 transition"
                placeholder="Subject"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="text-sm rounded-md w-full p-2.5 bg-white bg-opacity-10 hover:cursor-pointer dark:placeholder-neutral-500 focus:cursor-default text-white outline-hidden focus:outline outline-2 transition"
                placeholder="Leave a message..."
              />
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-md sm:w-fit bg-white bg-opacity-10 hover:bg-opacity-5 transition"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
