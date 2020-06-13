import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>

              <span style={{ fontFamily: "monospace" }}>Automate and optimize your job search using Trackr</span>
            </h4>
            <p className="flow-text grey-text text-darken-1">
            Sign up and start using now in three easy steps
            </p>
            <br />
            <div className="col s12">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginBottom:"3%"
                }}
                className="btn btn-large waves-effect waves-light hoverable purple "
              >
                Sign Up
              </Link>
            </div>

            <div className="col s12">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable purple "
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
