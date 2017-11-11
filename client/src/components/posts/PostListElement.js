import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
import "./PostListElement.css";
import moment from "moment";

const PostListElement = data => {
  const {
    view_count,
    items,
    created_at,
    description,
    location,
    postType,
    title,
    _user,
    _id
  } = data;

  let prices = items.map((item, index) => {
    return item["price"];
  });

  let maxPrice = Math.max(...prices) || "N/A";
  let minPrice = Math.min(...prices) || "N/A";

  let currentDate = moment(Date.now());
  let postDate = moment(created_at);

  let postTypeBadgeName = "new badge blue hoverable";

  if (postType === "Sell") {
    postTypeBadgeName = "new badge red hoverable";
  }

  return (
    <div>
      <ul className="collection" style={{ margin: "0px" }}>
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
              <b>{title}</b>
            </span>
            {postDate.isAfter(currentDate.subtract(1, "days")) ? (
              <span
                className="new badge green hoverable"
                data-badge-caption="New"
                id="badge"
              />
            ) : null}

            <span
              className={postTypeBadgeName}
              data-badge-caption={postType}
              id="badge"
            />
            <span
              className="new badge lime hoverable"
              data-badge-caption={location}
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
            <p id="price">
              {maxPrice === minPrice ? maxPrice : minPrice + " - " + maxPrice}
            </p>
          </div>
          <div className="col m1" style={{ textAlign: "center" }}>
            <span>
              <b>Views</b>
            </span>
            <p id="views">{view_count}</p>
          </div>
          <div
            className="col m1 hide-on-small-only"
            style={{ textAlign: "center" }}
          >
            <p id="date">{postDate.format("MMM Do, YYYY")}</p>
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
// PostListElement.propTypes = {
//   created_at: PropTypes.string.isRequired,
//   phoneNumber: PropTypes.string
// };
// PostListElement.defaultProps = {
//   phoneNumber: "111111"
// };
export default PostListElement;
