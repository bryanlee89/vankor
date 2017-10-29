import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Dashboard from "./Dashboard";
import PostNew from "./posts/PostNew";
import Footer from "./Footer";

const Landing = () => {
  return <div>LANDING PAGE</div>;
};
const PostList = () => {
  return <div>POST LIST!!</div>;
};

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="row" style={{ marginBottom: "0px" }}>
              <div
                className="col s2 indigo lighten-3 hide-on-small-only"
                style={{ height: "100vh" }}
              >
                SIDE MENU
              </div>
              <div
                className="col s12 m10 indigo lighten-5"
                style={{ position: "relative" }}
              >
                <Route exact path="/" component={Landing} />
                <Route exact path="/posts" component={Dashboard} />
                <Route path="/posts/new" component={PostNew} />
              </div>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
