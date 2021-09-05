import React from "react";

const Footer = (props) => {
  const { height, handleHeight, accessed, handleAccess } = props;

  return (
    <>
      <div
        className="footerHolder"
        style={{
          height: height * 0.7 + "px",
        }}
      ></div>
      <div className="footer-wrapper fixed-bottom" style={{ zIndex: 1000 }}>
        <footer
          className="bg-dark "
          style={{
            zIndex: 1010,
            height: height + "px",
          }}
        >
          <div
            className="d-flex flex-row-reverse bd-highlight "
            style={{ opacity: accessed ? 1 : 0, transition: "all 0.7s" }}
          >
            <a
              target="_blank"
              href="https://github.com/Dushyant029"
              rel="noopener noreferrer"
            >
              <i className="fab footerIcon fa-github px-2"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/k-dushyant-reddy-060234165/"
              rel="noopener noreferrer"
            >
              <i className="px-2 fab footerIcon fa-linkedin-in"></i>
            </a>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div
            className="d-flex align-items-end flex-column bd-highlight mb-3"
            style={{ opacity: accessed ? 0 : 1 }}
          >
            <q>
              Passionate about coding and ability to perform well in team
              management.
            </q>
          </div>
          <div className="d-flex justify-content-center">
            <button
              id="welcomeBtn"
              onClick={() => {
                document.getElementById("welcomeBtn").style.opacity = 0;
                handleHeight(100);
                handleAccess();
              }}
            >
              <span>Welcome to my Portfolio </span>
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
