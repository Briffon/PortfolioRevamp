import React from "react";
import "./index.css";
import Particles from "react-particles-js";

function Contact() {
  const submit = (e) => {};
  return (
    <div className="section contact__container">
      <h2>Contact Me</h2>
      <div className="contact__container__items">
        <form id="form" onSubmit={submit}>
          <Particles
            width="100%"
            height="100%"
            params={{
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 1500,
                  },
                },
                line_linked: {
                  enable: true,
                  opacity: 0.02,
                },
                move: {
                  direction: "right",
                  speed: 0.3,
                },
                size: {
                  value: 1,
                },
                opacity: {
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.05,
                  },
                },
              },
              interactivity: {
                events: {
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                },
                modes: {
                  push: {
                    particles_nb: 1,
                  },
                },
              },
              retina_detect: true,
            }}
          />
          <h3>Take the Next Step Now</h3>
          <div className="input-field">
            <input id="name" placeholder="Name" />
            <span className="error-field"></span>
          </div>
          <div className="input-field">
            <input id="email" placeholder="Email" />
            <span className="error-field"></span>
          </div>
          <div className="input-field">
            <input id="subject" placeholder="Subject" />
            <span className="error-field"></span>
          </div>
          <div className="input-field">
            <textarea id="message" placeholder="Message" />
            <span className="error-field"></span>
          </div>
          <button>Submit</button>
        </form>
        <div className="contact__container__cta">
          <div className="contact__container__cta__item">
            <p>
              <img src="./images/icons/email.png" alt="email icon" />
              btsmith@digitalbyte.io
            </p>
            <p>
              <img src="./images/icons/smartphone.png" alt="phone icon" />
              (678)-538-7485
            </p>
          </div>
          <div className="contact__container__cta__item">
            <p>
              <img src="./images/icons/email.png" alt="email icon" />
              btsmith@digitalbyte.io
            </p>
            <p>
              <img src="./images/icons/smartphone.png" alt="phone icon" />
              (678)-538-7485
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
