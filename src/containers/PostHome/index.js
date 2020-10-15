import Card from "../../components/UI/Card";

import blogData from "../../data/blog.json";
import { NavLink } from "react";
import React, { useState, useEffect } from "react";
import "./style.css";

import blogPost from "../../data/blog.json";


const SideImage = props => {
  return (
    <div style={{ height: `${props.height}px` }}>
      <img src={props.src} alt='' />
    </div>
  );
};

const ImageGallary = props => (
  <div className='gallaryPost' style={props.gallaryStyle}>
    <section style={{ width: props.largeWidth }}>
      <div className='mainImageWrapper'>
        <img
          src={require("../../blogPostImages/" + props.imagesArray[5])}
          alt=''
        />
      </div>
    </section>
    <section
      className={"sideImageWrapper"}
      style={{ width: "27%", textAlign: "center" }}
    >
      {props.imagesArray.map(image => (
        <SideImage
          height={props.sideImageHeight}
          src={require("../../blogPostImages/" + image)}
          alt=''
        />
      ))}
    </section>
  </div>
);

const PostHome = props => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);
  const gallaryHeight = 450;
  const gallaryStyle = {
    height: gallaryHeight + "px",
    overflow: "hidden",
  };
  const sideImageHeight = gallaryHeight / 3;
  const imgAr = blogData.data.map(post => post.blogImage);
  return (
    <div>
      <Card>
        <ImageGallary
          largeWidth='70%'
          smallWidth='30%'
          sideImageHeight={sideImageHeight}
          gallaryStyle={gallaryStyle}
          imagesArray={imgAr}
        />
      </Card>
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className='cardHeader'>
          <span>Recent Posts</span>
        </div>

        <div className='recentPosts'>
          {posts.map(post => {
            return (
              <NavLink key={post.id} to={`/post/${post.slug}`}>
                <div className='recentPost'>
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default PostHome;
