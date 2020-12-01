import React from "react";
import {GithubProjects} from "../components";

export class Portfolio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GithubProjects />
        <div className="container">
          <h1>Album</h1>
          <div className="row">
            <div className="col-4">
              <img src="https://imgur.com/Bcw1dQB.jpg" className="img-fluid" />
            </div>
            <div className="col-4">
              <img src="https://imgur.com/NxnHU5J.jpg" className="img-fluid" />
            </div>
            <div className="col-4">
              <img src="https://imgur.com/Lv4UCQD.jpg" className="img-fluid" />
            </div>
            <div className="col-4">
              <img src="https://imgur.com/fs2UvLJ.jpg" className="img-fluid" />
            </div>
            <div className="col-4">
              <img src="https://imgur.com/PeDAOWK.jpg" className="img-fluid" />
            </div>
            <div className="col-4">
              <img src="https://imgur.com/koARFsB.jpg" className="img-fluid" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
