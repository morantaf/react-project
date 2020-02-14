import React, { Component } from "react";
import "./SignupForm.css";

export default class SignupForm extends Component {
  render() {
    return (
      <div>
        <a href="#signup">Signup</a>
        <form id="signup" className="signup">
          <div>
            <a href="#close" title="Close" className="close">
              X
            </a>
            <div className="form-group">
              <label htmlFor="inputEmail">Email address</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="muted-text">
                We'll never share your email with anyone else.
                </small>
            </div>
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              aria-describedby="passwordHelpBlock"
            />
            <small id="passwordHelpBlock" className="muted-text">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces or special characters.
              </small>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I agree to gift you my kidney
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
