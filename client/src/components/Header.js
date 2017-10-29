import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li>
            <a className="waves-effect waves-light social-icon btn facebook">
              <i className="fa fa-facebook" style={{ lineHeight: "38px" }} />
            </a>
          </li>,
          <li>
            <a
              href="/auth/google"
              className="waves-effect waves-light social-icon btn google"
            >
              <i className="fa fa-google" style={{ lineHeight: "38px" }} />
            </a>
          </li>
        ];
      default:
        return [
          <li key="1">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className=" blue darken-4">
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/posts" : "/"}
            className="left brand-logo"
            style={{ margin: "0 10px" }}
          >
            VanKor
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
