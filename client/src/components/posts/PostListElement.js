<<<<<<< HEAD
import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
import "./PostListElement.css";
import moment from "moment";

const PostListElement = data => {
=======
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './PostListElement.css';

const PostListElement = (data) => {
  console.log(data);

>>>>>>> c9c0b74cd82300586ebc5152c43ce1832e24b8cb
  const {
    view_count,
    items,
    created_at,
    description,
    location,
    postType,
    title,
    _user,
    _id,
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
<<<<<<< HEAD
      <ul className="collection" style={{ margin: "0px" }}>
        <li
          className="collection-item row"
          style={{ padding: "5px", height: "75px" }}
        >
=======
      <ul className="collection">
        <li className="collection-item row" style={{ padding: '5px', height: '75px' }}>
>>>>>>> c9c0b74cd82300586ebc5152c43ce1832e24b8cb
          <div
            className="col m1 hide-on-small-only hoverable"
            style={{ padding: '0px 5px', cursor: 'pointer' }}
          >
            <div style={{ textAlign: 'center' }}>
              <i
                className="medium material-icons circle blue lighten-4"
                style={{ fontSize: '2.5rem' }}
              >
                person
              </i>
            </div>
            <p id="user" className="truncate">
              minjae8989 is dumb
            </p>
          </div>
          <div className="col s10 m6">
<<<<<<< HEAD
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
=======
            <span style={{ cursor: 'pointer' }}>
              <a href={`/posts/${_id}`}>
                <b>{title}</b>
              </a>
            </span>
            <span className="new badge green hoverable" data-badge-caption="New" id="badge" />
            <span className="new badge blue hoverable" data-badge-caption={postType} id="badge" />
            <span className="new badge lime hoverable" data-badge-caption="Vancouver" id="badge" />
>>>>>>> c9c0b74cd82300586ebc5152c43ce1832e24b8cb
            <p id="description" className="hide-on-small-only truncate">
              {description}
            </p>
          </div>
          <div className="col m2" style={{ textAlign: 'center' }}>
            <span>
              <b>Price</b>
            </span>
            <p id="price">
              {maxPrice === minPrice ? maxPrice : minPrice + " - " + maxPrice}
            </p>
          </div>
          <div className="col m1" style={{ textAlign: 'center' }}>
            <span>
              <b>Views</b>
            </span>
            <p id="views">{view_count}</p>
          </div>
<<<<<<< HEAD
          <div
            className="col m1 hide-on-small-only"
            style={{ textAlign: "center" }}
          >
            <p id="date">{postDate.format("MMM Do, YYYY")}</p>
=======
          <div className="col m1 hide-on-small-only" style={{ textAlign: 'center' }}>
            <p id="date">Nov 11, 2017</p>
>>>>>>> c9c0b74cd82300586ebc5152c43ce1832e24b8cb
          </div>
          <div className="col s1" style={{ textAlign: 'center', paddingRight: '5px' }}>
            <i id="favorite" className="material-icons">
              star_border
            </i>
          </div>
        </li>
      </ul>
    </div>
  );
};
<<<<<<< HEAD
// PostListElement.propTypes = {
//   created_at: PropTypes.string.isRequired,
//   phoneNumber: PropTypes.string
// };
// PostListElement.defaultProps = {
//   phoneNumber: "111111"
// };
=======
PostListElement.propTypes = {
  created_at: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string,
};
PostListElement.defaultProps = {
  phoneNumber: '111111',
};
>>>>>>> c9c0b74cd82300586ebc5152c43ce1832e24b8cb
export default PostListElement;
