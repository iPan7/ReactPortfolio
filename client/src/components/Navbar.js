import React from "react";
import {Link} from "react-router-dom";

export class Navbar extends React.Component {
  render() {
    return (
      <div className="p-3 mb-2 bg-dark text-white">
        <div className="h1 text-center">Ian Panlilio</div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link
              type="button"
              className="nav-link active btn btn-link border border-primary ml-2 mr-2"
              to="/AboutMe"
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              type="button"
              className="nav-link active btn btn-link border border-primary ml-2 mr-2"
              to="/Portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              type="button"
              className="nav-link active btn btn-link border border-primary ml-2 mr-2"
              to="/Contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="socials text-center mt-2">
          <a href="https://twitter.com/share" className="twitter-share-button">
            Twitter
          </a>
          <br />
          <a
            type="button"
            href="https://www.linkedin.com/in/ian-p/"
            className="btn-linkedin"
          >
            Linkedin
          </a>
        </div>
      </div>
    );
  }
}