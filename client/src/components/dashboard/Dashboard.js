import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  state = {
    company_name: ''
  }

  componentDidMount = () => {
    this.getJobs();
  }

  getJobs = () => {
    axios.get('http://localhost:3000/api/jobs/getjobinfo/')
        .then(res => {
            this.setState({ company_name: res.data });
            console.log(res.data);
        })
        .catch(function (error) {
            console.log(error);
        })
  }

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Welcome to {" "}
                <span style={{ fontFamily: "monospace" }}>Trackr</span>! Use me to take control of your job hunt 💻 🏆
              </p>
            </h4>

            <table id="simple-board">
              <tbody>
                <tr id="row0">
                  <td id="cell0-0"> Job Title </td>
                  <td id="cell0-1"> Company </td>
                  <td id="cell0-2"> Date Applied </td>
                  <td id="cell0-3"> Location </td>
                </tr>
                <tr id="row1">
                  <td id="cell1-0"></td>
                  <td id="cell1-1"></td>
                  <td id="cell1-2"></td>
                  <td id="cell1-3"></td>
                </tr>
                <tr id="row3">
                  <td id="cell2-0"></td>
                  <td id="cell2-1"></td>
                  <td id="cell2-2"></td>
                  <td id="cell1-3"></td>
                </tr>
                <tr id="row4">
                  <td id="cell0-0"></td>
                  <td id="cell0-1"></td>
                  <td id="cell0-2"></td>
                  <td id="cell1-3"></td>
                </tr>
              </tbody>
            </table>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>

          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
