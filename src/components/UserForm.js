import React, { Component } from 'react';
import FormUserDetails from './FormUserProfile';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import {userSignUp} from "../UserCook/action"
import { connect } from "react-redux";

 class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    imageUrl: '',
    houseNo: '',
    postCode: '',
    about: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (state) => {
    const { firstName, lastName, email, password, imageUrl, houseNo, postCode, about } = this.state;
    this.props.userSignUp(firstName, lastName, email, password, imageUrl, houseNo, postCode, about)
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, password, imageUrl, houseNo, postCode, about } = this.state;
    const values = { firstName, lastName, email, password, imageUrl, houseNo, postCode, about };
    
    switch (step) {
      case 1:
        return (
          <>
          <h1>Let's get started</h1>
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
          </>
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4: {
        this.handleSubmit(this.state)
        
      }
    }
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps,{userSignUp})(UserForm); 