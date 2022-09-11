import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import Image from "next/image";
// import heroImg from '../assets/hero-image.png';

function HeroSection() {
  const element = useRef();
  const typed = useRef();

  useEffect(() => {
    const options = {
      strings: [
        "Enthusiastic Dev 😎",
        "Backend Developer 🧑🏻‍💻",
        "NodeJS Developer 👨‍💻",
        "FullStack Developer 😎",
        "ReactJS Developer 👨‍💻",
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    };

    typed.current = new Typed(element.current, options);
    return () => {
      typed.current.destroy();
    };
  });

  return (
    <div className="herosection" id="home">
      <div className="herosection-body row justify-content-center">
        <div className="col-lg-6 col-md-6 col-sm-12 mt-2">
          <div className="d-flex flex-column justify-content-center text-section">
            <span className="main-text">
              Hello, I&apos;m
              <span className="name-text"> Jatin Gambhir</span>
            </span>
            <span className="skill-text py-2" ref={element}></span>
            <span className="subheading-text">
              Knack of Building Applications with Front and Backend Operations
            </span>
            <div className="d-flex flex-row justify-content-center mt-5">
              <a className="btn btn-hire" href="#contact">
                Hire Me
              </a>
              <a
                className="btn btn-resume"
                target="_blank"
                href="https://res.cloudinary.com/instac/image/upload/v1657856215/resume/Jatin-Gambhir-Resume_h9jcfw.pdf"
              >
                Get Resume
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
          <div className="d-flex justify-content-center">
            <Image
              className="img-fluid hero-img"
              alt="Jatin Gambhir"
              width={300}
              height={500}
              src="/images/hero-image.png"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default HeroSection;
