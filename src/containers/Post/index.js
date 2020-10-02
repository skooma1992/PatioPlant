import React from "react";
import "./style.css";
import Card from "../../components/UI/Card";
import BlogPost from "../../components/BlogPost";

const Post = props => {
  return (
    <section className='container'>
      <div className='blogPost'>
        <BlogPost></BlogPost>
      </div>
      <div className='sidebar'></div>
    </section>
  );
};

export default Post;
