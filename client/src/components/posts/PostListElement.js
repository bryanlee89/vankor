import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./PostListElement.css";

const PostListElement = data => {
  console.log(data);

  const {
    created_at,
    description,
    email,
    items,
    location,
    phoneNumber,
    postType,
    title,
    url,
    _user,
    _id
  } = data;

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
              <b>
                {title} - {phoneNumber}{" "}
              </b>
            </span>
            <span
              className="new badge green hoverable"
              data-badge-caption="New"
              id="badge"
            />
            <span
              className="new badge blue hoverable"
              data-badge-caption={postType}
              id="badge"
            />
            <span
              className="new badge lime hoverable"
              data-badge-caption="Vancouver"
              id="badge"
            />
            <p id="description" className="hide-on-small-only truncate">
              {description}
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
PostListElement.propTypes = {
  created_at: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string
};
PostListElement.defaultProps = {
  phoneNumber: "111111"
};
export default PostListElement;
