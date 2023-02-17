import React from "react";

export const Contact = () => {
  return (
    <section className="section6 flex" id="contact">
      <h1 className="title">Get in touch</h1>

      <div className="social flex">
        <a href="https://www.linkedin.com/in/milan-sherpa-5a45b51b3/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href=" https://github.com/SherpaMilan">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.facebook.com/">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://twitter.com/i/flow/login">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.whatsapp.com/">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
      <h1>Or</h1>
      <div className="email-section flex">
        <p>Contact me over email</p>
        <div className="email">
          <a href="mailto:123@gmail.com">msherpa393@gmail.com</a>
          <div className="send">
            <i className="fa-regular fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </section>
  );
};
