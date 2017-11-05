import React from "react";
import { Link } from "react-router-dom";
import PostList from "./posts/PostList";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

const Dashboard = () => {
  return (
    <div>
      <div className="row">
        <div className="col s10">
          <SearchBar />
        </div>
        <div className="col s2" style={{textAlign: "center", marginTop: "15px"}}>
          <Link to="/posts/new" className="waves-effect waves-light btn-large ">
            <i className="large material-icons">add</i>
          </Link>
        </div>
      </div>
      <PostList />
      <Pagination />
    </div>
  );
};

export default Dashboard;
