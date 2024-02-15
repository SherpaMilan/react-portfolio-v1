import { getByTitle } from "@testing-library/react";

export const Contact = () => {
  const whatsappstyle = {
    color: "#1ac8b9",
  };
  const twitterStyle = {
    color: "#1ac8b9",
  };
  const metastyle = {
    color: "#1ac8b9",
  };
  const lnstyle = {
    color: "#1ac8b9",
  };
  const githubstyle = {
    color: "#1ac8b9",
  };

  return (
    <section className="section6 flex" id="contact">
      <h1 className="title">Get in touch</h1>
      <h2>
        Join me as I continue to carve my path in the ever-evolving world of
        technology.
      </h2>
      <div className="social flex">
        <a href="https://www.linkedin.com/in/milan-sherpa-5a45b51b3/">
          <i class="bx bxl-linkedin-square" style={lnstyle}></i>
        </a>
        <a href=" https://github.com/SherpaMilan">
          <i class="bx bxl-github" style={githubstyle}></i>
        </a>
        <a href="https://www.facebook.com/">
          <i class="bx bxl-meta" style={metastyle}></i>
        </a>
        <a href="https://twitter.com/i/flow/login">
          <i class="bx bxl-twitter" style={twitterStyle}></i>
        </a>
        <a href="https://www.whatsapp.com/">
          <i class="bx bxl-whatsapp" style={whatsappstyle}></i>
        </a>
      </div>
      <h1>Or</h1>
      <div className="email-section flex">
        <p>Contact me over email</p>
        <div className="email">
          <a href="mailto:msherpa393@gmail.com">msherpa393@gmail.com</a>
          <div className="send">
            <i className="fa-regular fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </section>
  );
};
