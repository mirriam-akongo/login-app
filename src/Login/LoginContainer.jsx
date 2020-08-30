import React from "react";
import { Login } from "./LoginComponent";

export class LoginContainer extends React.Component {
  //intialize state
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  // handle change
  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.id]: event.target.value });
  };
  // handle submit
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.email === "") {
      window.alert("email is empty");
    } else if (this.state.password === "") {
      window.alert("password is empty");
    } else {
      window.alert("succes");
    }
  };
  // render
  render() {
    return (
      <Login
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
