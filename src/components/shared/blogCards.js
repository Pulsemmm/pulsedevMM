import React from "react";
import profile from "../../assets/images/blogs/profile-pic.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BlogCards = ({ blogData, blogPerPage }) => {
  const data = blogData;

  const blogsPerPage = 5;

  const navigate = useNavigate();

  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            className="blog-card pointer"
            onClick={() => navigate(item.link)}
            key={index}
          >
            <div className="top ">
              <img
                src={item.thumbnail}
                alt="logocard1"
                className="logocard img-fluid"
              />
              <div className="profile d-flex v-center h-center">
                <img src={profile} alt="img" className="img-fluid" />
                <div className="name d-flex flex-column">
                  <h6>{item.writer}</h6>
                  <p>{item.date}</p>
                </div>
              </div>
            </div>
            <div className="bottom d-flex flex-column ">
              <div className="upper d-flex flex-column">
                <p className="heading">{item.heading}</p>
                <p className="date">{item.discription}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogCards;
