import React from 'react'

function About() {
  return (
    <div className='about-me-section my-5' id='about'>
      <div className='d-flex flex-column'>
        <span className='about-me-heading text-center'>About Me</span>
        <span className='about-me-sub-heading text-center'>Why Choose Me?</span>
        <div className='row justify-content-center shadow-lg my-5'>
          <div className='col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center'>
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_vhs8qxx2.json"
              background="transparent"
              speed="1"
              style={{ width: "500px"}}
              loop
              autoplay></lottie-player>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column'>
            <span className='about-me-text'>
              Full Stack Developer with background knowledge in MERN Stack with redux,
              along with knowledge of building applications with utmost efficiency. Strong
              professional with MCA willing to be an asset for an organisation.
            </span>
            <span className='few-higlights'>
              <span className='hightlight-text'>Here are few Higlights</span>
              <span className='highlight-list'>
                <ul>
                  <li>Full Stack Developement</li>
                  <li>Interactive Front end as per the design</li>
                  <li>NodeJS, Express (All Backend Technologies)</li>
                  <li>MySQL, MongoDB</li>
                  <li>ReactJS, React-Native</li>
                  <li>Docker, Kubernetes, AWS</li>
                </ul>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
