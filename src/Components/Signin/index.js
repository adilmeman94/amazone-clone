import React from "react";
import "./styles.css";

export default class Signin extends React.Component {
  render() {
    console.log("Signin props", this.props);

    return (
      <div className="signin-container">
        <input id="username" />
        <input type="password" id="password" />
        <button onClick={this.props.handleLogin}>Signin</button>
      </div>
    );
  }
}
