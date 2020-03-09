import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div open="true" fullWidth="true" maxWidth="sm">
        <h1>Thank You For Your Submission</h1>
        <p>You will get an email with further instructions</p>
        <p>
          Click{" "}
          <Link className="nav-link" to="/home">
            here
          </Link>{" "}
          to go to{" "}
        </p>
      </div>
    );
  }
}

export default connect()(Success);
