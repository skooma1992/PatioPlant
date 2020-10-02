import React from "react";
import "./style.css";
import Card from "../../components/UI/Card";
import BlogPost from "../../components/BlogPost";
import Sidebar from "../../components/SideBar";

const Post = props => {
  return (
    <section className='container'>
      <BlogPost></BlogPost>
      <Sidebar></Sidebar>

      <div className='sidebar'></div>
    </section>
  );
};

export default Post;
