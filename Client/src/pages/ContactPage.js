import React, { Component } from "react";
import LinkHere from "../components/LinkHere/LinkHere";
import Contact from "../components/Contact/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default class ContactPage extends Component {
  render() {
    var url = this.props.match.match.url;
    if (url === "/contact") {
      url = (
        <>
          <FontAwesomeIcon icon={faAngleRight} /> {" Liên hệ"}
        </>
      );
    }
    return (
      <div>
        <LinkHere url={url}></LinkHere>
        <Contact></Contact>
      </div>
    );
  }
}
