import React from "react";

const Home = () => {
  return (
    <div className="container d-flex align-items-center">
      <div className="row d-flex ">
        <div className="col-md ">
          <div id="pictureWrapper">
            <img
              src="/assets/images/index1.png"
              id="mainpic"
              className="img-thumbnail mh-50 h-33 img-fluid"
              alt=""
            />
          </div>
          <h2>About Me</h2>
          <hr></hr>
          <p>
            I'm Dushyant from India, and I do for(init = Learn, run {'>'}= Design,
            finalize = Development++). I enjoy learning languages like JAVA, C,
            C++, HTML, CSS, MYSQL and frameworks like Javascript, Nodejs, React,
            React Native as well as work in ui,ux design in XD.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
