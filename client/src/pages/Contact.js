import React from "react";

export class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="container-fluid bg-dark text-white">
            <div className="card-body bg-dark text-white">
              <h1>Contact</h1>
              <div className="input-group flex-nowrap mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="addon-wrapping">
                    Name
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div className="input-group flex-nowrap mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="addon-wrapping">
                    Email
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <div className="nav-item">
                <a
                  type="button"
                  className="nav-link active btn btn-link border border-primary ml-2 mr-2"
                  href="gmail.com"
                >
                  Submit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}