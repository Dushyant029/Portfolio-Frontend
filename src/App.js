import React, { useState } from "react";
import Home from "./pages/Home/";
import Portfolio from "./pages/Portfolio/";
import Contact from "./pages/Contact/";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import { pdfjs } from "react-pdf";
import Resume from "./pages/Resume";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  const [height, setHeight] = useState(Math.ceil(window.innerHeight / 1.7));
  const [accessed, setAccessed] = useState(false);

  const handleHeight = (heightValue) => {
    setHeight(heightValue);
  };

  const handleAccess = () => {
    setTimeout(function () {
      setAccessed(true);
    }, 1500);
  };

  return (
    <>
      <BrowserRouter>
        <Nav height={height} accessed={accessed} handleAccess={handleAccess} />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer
        handleHeight={handleHeight}
        accessed={accessed}
        handleAccess={handleAccess}
        height={height}
      />
    </>
  );
}
export default App;
