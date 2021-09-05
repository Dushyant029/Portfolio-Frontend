import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import samplePDF from "./K. Dushyant Reddy Resume.pdf";

export default class PDF extends Component {
  state = {
    numPages: null,
  };

  onDocumentLoadSuccess = (document) => {
    const { numPages } = document;
    this.setState({
      numPages,
    });
  };

  render() {
    const { numPages } = this.state;

    return (
      <Document file={samplePDF} onLoadSuccess={this.onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            scale={0.5}
            width={window.innerWidth * 2}
            key={`page_${index + 1}`}
            pageNumber={index + 1}
          />
        ))}

        <div id="fixed">Download</div>
      </Document>
    );
  }
}
