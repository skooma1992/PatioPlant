import React from "react";
import "./style.css";
import Card from "../../../components/UI/Card";

/**
 * @author
 * @function RecentPosts
 **/

const RecentPosts = props => {
  return (
    <div style={props.style}>
      <Card style={{ marginBottom: "20px" }}>
        <div className='postImageWrapper'>
          <img src={require("../../../blogPostImages/recentpostmain.jpg")} />
        </div>

        <div style={{ textAlign: "center" }}>
          <span>Featured</span>
          <h2>Container Gardening 101</h2>
          <span>posted on October 7, 2020 by Jake Upson</span>
          <p>
            this is sample text until i write things this is sample text until i
            write things this is sample text until i write things this is sample
            text until i write things this is sample text until i write things
            this is sample text until i write things
          </p>

          <button>Read More</button>
        </div>
      </Card>
    </div>
  );
};

export default RecentPosts;
