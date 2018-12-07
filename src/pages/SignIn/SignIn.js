import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import * as ROUTES from "/routes";
// import { FirebaseContext } from '../Firebase';

const INITIAL_STATE = {
  email: "",
  passwordOne: "",
  error: null
};

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, passwordOne, error } = this.state;
    const isInvalid = passwordOne === "" || email === "";

    return (
      <form style={{ padding: "50px" }} onSubmit={this.onSubmit}>
        <br />
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <br />
          <input
            style={{ paddingLeft: "33%", paddingRight: "33%" }}
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="passwordOne">Password: </label>
          <br />
          <input
            style={{ paddingLeft: "33%", paddingRight: "33%" }}
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
        </div>
        <br />
        <button disabled={isInvalid} type="submit">
          Proceed to Home Page!
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}


export default SignIn;
