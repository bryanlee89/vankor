import React from "react";
import { Link } from 'react-router-dom';
import PostList from "./posts/PostList";

const Dashboard = () => {
  return (
    <div>
      <PostList />
      <div className="fixed-action-btn" style={{ margin: "10px 20px", bottom: "10vh", right: "5vw" }}>
        <Link to="/posts/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
