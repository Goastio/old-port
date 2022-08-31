import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Contact({ setIsActive }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsActive("Contact");
    }
  }, [inView]);
  return (
    <>
      <div
        ref={ref}
        id="contact"
        className=""
      >
      </div>
    </>
  );
}

export default Contact;
