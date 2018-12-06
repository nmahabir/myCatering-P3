import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import * as ROUTES from "/routes";
// import { FirebaseContext } from '../Firebase';

// const SignUpPage = () => (
//   <div>
//     <h1>SignUp</h1>
//     <FirebaseContext.Consumer>
//       {firebase => <SignUp firebase={firebase} />}
//     </FirebaseContext.Consumer>
//   </div>
// );

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

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
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";
    return (
      <form style={{padding: '50px'}} onSubmit={this.onSubmit}>
      <div className="form-group">
      <label htmlFor="username">Name: </label>
      <br/>
        <input  style={{paddingLeft: '33%', paddingRight: '33%'}}
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        </div>
        <br/>
        <div className="form-group">
        <label htmlFor="email">Email: </label>
        <br/>
        <input  style={{paddingLeft: '33%', paddingRight: '33%'}}
        
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        </div>
        <br/>
        <div className="form-group">
        <label htmlFor="passwordOne">Password: </label>
        <br/>
        <input  style={{paddingLeft: '33%', paddingRight: '33%'}}
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        </div>
        <br/>
        <div className="form-group">
        <label htmlFor="passwordOne">Confirm Password: </label>
        <br/>
        <input  style={{paddingLeft: '33%', paddingRight: '33%'}}
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        </div>
        <br/>
        <button disabled={isInvalid} type="submit">
        Join us!
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

// const SignUpLink = () => (
//   <p>
//     Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
//   </p>
// );

export default SignUp;