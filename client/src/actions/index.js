import axios from "axios";
import { FETCH_USER, FETCH_ALL_POSTS } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchAllPosts = () => async dispatch => {
  const res = await axios.get("/api/posts");

  dispatch({ type: FETCH_ALL_POSTS, payload: res.data });
};

export const submitPost = data => async dispatch => {
  let formData = new FormData();
  console.log(data);

  Object.entries(data).forEach(([key, value]) => {
    if (key === "file") {
      for (let file of value) {
        formData.append("images", file, file.name);
      }
    } else {
      formData.append(key, value);
    }
  });

  const config = {
    headers: { "content-type": "multipart/form-data" }
  };

  console.log("posting.....");

  const res = await axios.post("/api/posts", formData, config);
  console.log("post successful");
  dispatch({ type: FETCH_USER, payload: res.data });
};
