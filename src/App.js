import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Products from "./Components/Products";
import ProductsSpecs from "./Components/ProductsSpecs";
import Signin from "./Components/Signin";
import "./styles.css";

function PrivateRoute({ isLogin, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLogin) {
          return <Redirect to="/signin" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
}

export default class App extends React.Component {
  state = {
    isLogin: false,
    username: "",
    password: "",
  };
  handleLogin = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
      this.setState({
        isLogin: true,
        username,
        password,
      });
    } else {
      console.log("Fail");
    }
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} name={this.state.username} />;
              }}
            />
            <Route
              path="/signin"
              render={(props) => {
                if (this.state.isLogin) {
                  return <Redirect to="/" />;
                } else {
                  return <Signin {...props} handleLogin={this.handleLogin} />;
                }
              }}
            />

            <PrivateRoute
              exact={true}
              path="/products"
              component={Products}
              isLogin={this.state.isLogin}
            />
            <PrivateRoute
              path="/products/:id"
              component={ProductsSpecs}
              isLogin={this.state.isLogin}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
