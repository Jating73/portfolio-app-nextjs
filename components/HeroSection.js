import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import { SocialIcon } from "react-social-icons";

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
            <div className="social-list">
              <Nav
                style={{ justifyContent: "space-evenly", padding: "12px 0px" }}
              >
                <Nav.Item>
                  <SocialIcon
                    network="email"
                    url="mailto:jatingambhir22@gmail.com"
                    target="blank"
                    fgColor="white"
                  />
                </Nav.Item>
                <Nav.Item>
                  <SocialIcon
                    url="https://github.com/Jating73"
                    target="blank"
                    fgColor="white"
                  />
                </Nav.Item>
                <Nav.Item>
                  <SocialIcon
                    url="https://www.facebook.com/jatin.gambhir.1671"
                    target="blank"
                    fgColor="white"
                  />
                </Nav.Item>
                <Nav.Item>
                  <SocialIcon
                    url="https://www.linkedin.com/in/jatin-gambhir-990193175/"
                    target="blank"
                    fgColor="white"
                  />
                </Nav.Item>
                <Nav.Item>
                  <SocialIcon
                    url="https://www.instagram.com/jating73/"
                    target="blank"
                    fgColor="white"
                  />
                </Nav.Item>
                <Nav.Item>
                  <SocialIcon
                    url="https://twitter.com/JatinGambhir7"
                    target="blank"
                    fgColor="white"
                  />
                </Nav.Item>
              </Nav>
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
