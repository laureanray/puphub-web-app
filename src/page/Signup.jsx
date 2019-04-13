import React, { Component } from "react";
import "../styles/signup__form.sass";
class Signup extends Component {
  render() {
    return (
      <div className="signup__form">
        <div className="form__wrapper">
          <form action="">
            <div className="row">
              <h1> Sign Up </h1>
              <input
                className="form__input"
                type="text"
                name="first__name"
                id="first__name"
                placeholder="First Name"
              />
              <input
                className="form__input"
                type="text"
                name="last__name"
                id="last__name"
                placeholder="Last Name"
              />
            </div>
            <div className="row">
              <input
                className="form__input"
                type="text"
                name="student__number"
                id="student__number"
                placeholder="Student Number"
              />
            </div>
            <div className="row">
              <input
                className="form__input"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="row">
              <input
                className="form__input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <button className="button button__primary"> Register </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
