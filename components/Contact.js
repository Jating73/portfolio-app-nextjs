import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const email_service_id = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const template_id = process.env.REACT_APP_TEMPLATE_ID;
  const public_key = process.env.REACT_APP_PUBLIC_KEY;

  const options = {
    from_name: name,
    from_email: email,
    to_name: "Jatin Gambhir",
    message: message,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(email_service_id, template_id, options, public_key).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contact-section" id="contact">
      <div className="relative-bg"></div>
      <div className="contact-inner-part d-flex flex-column">
        <span className="heading text-center">Contact Me</span>
        <span className="sub-heading text-center">
          Let&apos;s Keep in Touch
        </span>
        <div className="row">
          <div className="col-lg-6 col-md-5 col-sm-12 px-2 py-2 left">
            <span className="get-in-touch mx-4 my-5">Get in touch</span>
            <div className="d-flex justify-content-center">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_6iywfzg9.json"
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
            <div className="d-flex flex-column right">
              <form onSubmit={sendEmail}>
                <div className="input-group d-flex flex-column">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="input-group"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="input-group d-flex flex-column">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="input-group"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-group d-flex flex-column">
                  <label>Message</label>
                  <textarea
                    type="text"
                    placeholder="Enter your Message"
                    rows="4"
                    className="input-group"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Send Message"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
