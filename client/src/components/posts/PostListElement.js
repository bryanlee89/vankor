import React from "react";
import { connect } from "react-redux";
import "./PostListElement.css";

const PostListElement = () => {
  return (
    <div>
      <ul className="collection">
        <li
          className="collection-item row"
          style={{ padding: "5px", height: "75px" }}
        >
          <div
            className="col m1 hide-on-small-only hoverable"
            style={{ padding: "0px 5px", cursor: "pointer" }}
          >
            <div style={{ textAlign: "center" }}>
              <i
                className="medium material-icons circle blue lighten-4"
                style={{ fontSize: "2.5rem" }}
              >
                person
              </i>
            </div>
            <p id="user" className="truncate">
              minjae8989
            </p>
          </div>
          <div className="col s10 m6">
            <span style={{ cursor: "pointer" }}>
              <b>Selling Samsung Galaxy S3 p!</b>
            </span>
            <span
              className="new badge green hoverable"
              data-badge-caption="New"
              id="badge"
            />
            <span
              className="new badge blue hoverable"
              data-badge-caption="Sell"
              id="badge"
            />
            <span
              className="new badge lime hoverable"
              data-badge-caption="Vancouver"
              id="badge"
            />
            <p id="description" className="hide-on-small-only truncate">
              With the innovative Smart Stay feature, GALAXY S III automatically
              recognises when you are looking at the phone, whether it is to
              read an e-book or browse the
            </p>
          </div>
          <div className="col m2" style={{ textAlign: "center" }}>
            <span>
              <b>Price</b>
            </span>
            <p id="price">$1000000 - 200000</p>
          </div>
          <div className="col m1" style={{ textAlign: "center" }}>
            <span>
              <b>Views</b>
            </span>
            <p id="views">2332</p>
          </div>
          <div
            className="col m1 hide-on-small-only"
            style={{ textAlign: "center" }}
          >
            <p id="date">Nov 11, 2017</p>
          </div>
          <div
            className="col s1"
            style={{ textAlign: "center", paddingRight: "5px" }}
          >
            <i id="favorite" className="material-icons">
              star_border
            </i>
          </div>
        </li>
        <li
          className="collection-item row"
          style={{ padding: "5px", height: "75px" }}
        >
          <div
            className="col m1 hide-on-small-only hoverable"
            style={{ padding: "0px 5px", cursor: "pointer" }}
          >
            <div style={{ textAlign: "center" }}>
              <i
                className="medium material-icons circle blue lighten-4"
                style={{ fontSize: "2.5rem" }}
              >
                person
              </i>
            </div>
            <p id="user" className="truncate">
              minjae8989
            </p>
          </div>
          <div className="col s10 m6">
            <span style={{ cursor: "pointer" }}>
              <b>Selling Samsung Galaxy S3 p!</b>
            </span>
            <span
              className="new badge green hoverable"
              data-badge-caption="New"
              id="badge"
            />
            <span
              className="new badge blue hoverable"
              data-badge-caption="Sell"
              id="badge"
            />
            <span
              className="new badge lime hoverable"
              data-badge-caption="Vancouver"
              id="badge"
            />
            <p id="description" className="hide-on-small-only truncate">
              With the innovative Smart Stay feature, GALAXY S III automatically
              recognises when you are looking at the phone, whether it is to
              read an e-book or browse the
            </p>
          </div>
          <div className="col m2" style={{ textAlign: "center" }}>
            <span>
              <b>Price</b>
            </span>
            <p id="price">$1000000 - 200000</p>
          </div>
          <div className="col m1" style={{ textAlign: "center" }}>
            <span>
              <b>Views</b>
            </span>
            <p id="views">2332</p>
          </div>
          <div
            className="col m1 hide-on-small-only"
            style={{ textAlign: "center" }}
          >
            <p id="date">Nov 11, 2017</p>
          </div>
          <div
            className="col s1"
            style={{ textAlign: "center", paddingRight: "5px" }}
          >
            <i id="favorite" className="material-icons">
              star_border
            </i>
          </div>
        </li>
        <li
          className="collection-item row"
          style={{ padding: "5px", height: "75px" }}
        >
          <div
            className="col m1 hide-on-small-only hoverable"
            style={{ padding: "0px 5px", cursor: "pointer" }}
          >
            <div style={{ textAlign: "center" }}>
              <i
                className="medium material-icons circle blue lighten-4"
                style={{ fontSize: "2.5rem" }}
              >
                person
              </i>
            </div>
            <p id="user" className="truncate">
              minjae8989
            </p>
          </div>
          <div className="col s10 m6">
            <span style={{ cursor: "pointer" }}>
              <b>Selling Samsung Galaxy S3 p!</b>
            </span>
            <span
              className="new badge green hoverable"
              data-badge-caption="New"
              id="badge"
            />
            <span
              className="new badge blue hoverable"
              data-badge-caption="Sell"
              id="badge"
            />
            <span
              className="new badge lime hoverable"
              data-badge-caption="Vancouver"
              id="badge"
            />
            <p id="description" className="hide-on-small-only truncate">
              With the innovative Smart Stay feature, GALAXY S III automatically
              recognises when you are looking at the phone, whether it is to
              read an e-book or browse the
            </p>
          </div>
          <div className="col m2" style={{ textAlign: "center" }}>
            <span>
              <b>Price</b>
            </span>
            <p id="price">$1000000 - 200000</p>
          </div>
          <div className="col m1" style={{ textAlign: "center" }}>
            <span>
              <b>Views</b>
            </span>
            <p id="views">2332</p>
          </div>
          <div
            className="col m1 hide-on-small-only"
            style={{ textAlign: "center" }}
          >
            <p id="date">Nov 11, 2017</p>
          </div>
          <div
            className="col s1"
            style={{ textAlign: "center", paddingRight: "5px" }}
          >
            <i id="favorite" className="material-icons">
              star_border
            </i>
          </div>
        </li>
        <li
          className="collection-item row"
          style={{ padding: "5px", height: "75px" }}
        >
          <div
            className="col m1 hide-on-small-only hoverable"
            style={{ padding: "0px 5px", cursor: "pointer" }}
          >
            <div style={{ textAlign: "center" }}>
              <i
                className="medium material-icons circle blue lighten-4"
                style={{ fontSize: "2.5rem" }}
              >
                person
              </i>
            </div>
            <p id="user" className="truncate">
              minjae8989
            </p>
          </div>
          <div className="col s10 m6">
            <span style={{ cursor: "pointer" }}>
              <b>Selling Samsung Galaxy S3 p!</b>
            </span>
            <span
              className="new badge green hoverable"
              data-badge-caption="New"
              id="badge"
            />
            <span
              className="new badge blue hoverable"
              data-badge-caption="Sell"
              id="badge"
            />
            <span
              className="new badge lime hoverable"
              data-badge-caption="Vancouver"
              id="badge"
            />
            <p id="description" className="hide-on-small-only truncate">
              With the innovative Smart Stay feature, GALAXY S III automatically
              recognises when you are looking at the phone, whether it is to
              read an e-book or browse the
            </p>
          </div>
          <div className="col m2" style={{ textAlign: "center" }}>
            <span>
              <b>Price</b>
            </span>
            <p id="price">$1000000 - 200000</p>
          </div>
          <div className="col m1" style={{ textAlign: "center" }}>
            <span>
              <b>Views</b>
            </span>
            <p id="views">2332</p>
          </div>
          <div
            className="col m1 hide-on-small-only"
            style={{ textAlign: "center" }}
          >
            <p id="date">Nov 11, 2017</p>
          </div>
          <div
            className="col s1"
            style={{ textAlign: "center", paddingRight: "5px" }}
          >
            <i id="favorite" className="material-icons">
              star_border
            </i>
          </div>
        </li>
        <li
          className="collection-item row"
          style={{ padding: "5px", height: "75px" }}
        >
          <div
            className="col m1 hide-on-small-only hoverable"
            style={{ padding: "0px 5px", cursor: "pointer" }}
          >
            <div style={{ textAlign: "center" }}>
              <i
                className="medium material-icons circle blue lighten-4"
                style={{ fontSize: "2.5rem" }}
              >
                person
              </i>
            </div>
            <p id="user" className="truncate">
              minjae8989
            </p>
          </div>
          <div className="col s10 m6">
            <span style={{ cursor: "pointer" }}>
              <b>Selling Samsung Galaxy S3 p!</b>
            </span>
            <span
              className="new badge green hoverable"
              data-badge-caption="New"
              id="badge"
            />
            <span
              className="new badge blue hoverable"
              data-badge-caption="Sell"
              id="badge"
            />
            <span
              className="new badge lime hoverable"
              data-badge-caption="Vancouver"
              id="badge"
            />
            <p id="description" className="hide-on-small-only truncate">
              With the innovative Smart Stay feature, GALAXY S III automatically
              recognises when you are looking at the phone, whether it is to
              read an e-book or browse the
            </p>
          </div>
          <div className="col m2" style={{ textAlign: "center" }}>
            <span>
              <b>Price</b>
            </span>
            <p id="price">$1000000 - 200000</p>
          </div>
          <div className="col m1" style={{ textAlign: "center" }}>
            <span>
              <b>Views</b>
            </span>
            <p id="views">2332</p>
          </div>
          <div
            className="col m1 hide-on-small-only"
            style={{ textAlign: "center" }}
          >
            <p id="date">Nov 11, 2017</p>
          </div>
          <div
            className="col s1"
            style={{ textAlign: "center", paddingRight: "5px" }}
          >
            <i id="favorite" className="material-icons">
              star_border
            </i>
          </div>
        </li>
        <li
          className="collection-item row"
          style={{ padding: "5px", height: "75px" }}
        >
          <div
            className="col m1 hide-on-small-only hoverable"
            style={{ padding: "0px 5px", cursor: "pointer" }}
          >
            <div style={{ textAlign: "center" }}>
              <i
                className="medium material-icons circle blue lighten-4"
                style={{ fontSize: "2.5rem" }}
              >
                person
              </i>
            </div>
            <p id="user" className="truncate">
              minjae8989
            </p>
          </div>
          <div className="col s10 m6">
            <span style={{ cursor: "pointer" }}>
              <b>Selling Samsung Galaxy S3 p!</b>
            </span>
            <span
              className="new badge green hoverable"
              data-badge-caption="New"
              id="badge"
            />
            <span
              className="new badge blue hoverable"
              data-badge-caption="Sell"
              id="badge"
            />
            <span
              className="new badge lime hoverable"
              data-badge-caption="Vancouver"
              id="badge"
            />
            <p id="description" className="hide-on-small-only truncate">
              With the innovative Smart Stay feature, GALAXY S III automatically
              recognises when you are looking at the phone, whether it is to
              read an e-book or browse the
            </p>
          </div>
          <div className="col m2" style={{ textAlign: "center" }}>
            <span>
              <b>Price</b>
            </span>
            <p id="price">$1000000 - 200000</p>
          </div>
          <div className="col m1" style={{ textAlign: "center" }}>
            <span>
              <b>Views</b>
            </span>
            <p id="views">2332</p>
          </div>
          <div
            className="col m1 hide-on-small-only"
            style={{ textAlign: "center" }}
          >
            <p id="date">Nov 11, 2017</p>
          </div>
          <div
            className="col s1"
            style={{ textAlign: "center", paddingRight: "5px" }}
          >
            <i id="favorite" className="material-icons">
              star_border
            </i>
          </div>
        </li>
        <li
          className="collection-item row"
          style={{ padding: "5px", height: "75px" }}
        >
          <div
            className="col m1 hide-on-small-only hoverable"
            style={{ padding: "0px 5px", cursor: "pointer" }}
          >
            <div style={{ textAlign: "center" }}>
              <i
                className="medium material-icons circle blue lighten-4"
                style={{ fontSize: "2.5rem" }}
              >
                person
              </i>
            </div>
            <p id="user" className="truncate">
              minjae8989
            </p>
          </div>
          <div className="col s10 m6">
            <span style={{ cursor: "pointer" }}>
              <b>Selling Samsung Galaxy S3 p!</b>
            </span>
            <span
              className="new badge green hoverable"
              data-badge-caption="New"
              id="badge"
            />
            <span
              className="new badge blue hoverable"
              data-badge-caption="Sell"
              id="badge"
            />
            <span
              className="new badge lime hoverable"
              data-badge-caption="Vancouver"
              id="badge"
            />
            <p id="description" className="hide-on-small-only truncate">
              With the innovative Smart Stay feature, GALAXY S III automatically
              recognises when you are looking at the phone, whether it is to
              read an e-book or browse the
            </p>
          </div>
          <div className="col m2" style={{ textAlign: "center" }}>
            <span>
              <b>Price</b>
            </span>
            <p id="price">$1000000 - 200000</p>
          </div>
          <div className="col m1" style={{ textAlign: "center" }}>
            <span>
              <b>Views</b>
            </span>
            <p id="views">2332</p>
          </div>
          <div
            className="col m1 hide-on-small-only"
            style={{ textAlign: "center" }}
          >
            <p id="date">Nov 11, 2017</p>
          </div>
          <div
            className="col s1"
            style={{ textAlign: "center", paddingRight: "5px" }}
          >
            <i id="favorite" className="material-icons">
              star_border
            </i>
          </div>
        </li>
        <li
          className="collection-item row"
          style={{ padding: "5px", height: "75px" }}
        >
          <div
            className="col m1 hide-on-small-only hoverable"
            style={{ padding: "0px 5px", cursor: "pointer" }}
          >
            <div style={{ textAlign: "center" }}>
              <i
                className="medium material-icons circle blue lighten-4"
                style={{ fontSize: "2.5rem" }}
              >
                person
              </i>
            </div>
            <p id="user" className="truncate">
              minjae8989
            </p>
          </div>
          <div className="col s10 m6">
            <span style={{ cursor: "pointer" }}>
              <b>Selling Samsung Galaxy S3 p!</b>
            </span>
            <span
              className="new badge green hoverable"
              data-badge-caption="New"
              id="badge"
            />
            <span
              className="new badge blue hoverable"
              data-badge-caption="Sell"
              id="badge"
            />
            <span
              className="new badge lime hoverable"
              data-badge-caption="Vancouver"
              id="badge"
            />
            <p id="description" className="hide-on-small-only truncate">
              With the innovative Smart Stay feature, GALAXY S III automatically
              recognises when you are looking at the phone, whether it is to
              read an e-book or browse the
            </p>
          </div>
          <div className="col m2" style={{ textAlign: "center" }}>
            <span>
              <b>Price</b>
            </span>
            <p id="price">$1000000 - 200000</p>
          </div>
          <div className="col m1" style={{ textAlign: "center" }}>
            <span>
              <b>Views</b>
            </span>
            <p id="views">2332</p>
          </div>
          <div
            className="col m1 hide-on-small-only"
            style={{ textAlign: "center" }}
          >
            <p id="date">Nov 11, 2017</p>
          </div>
          <div
            className="col s1"
            style={{ textAlign: "center", paddingRight: "5px" }}
          >
            <i id="favorite" className="material-icons">
              star_border
            </i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PostListElement;