import React from "react";

const BlogBanner = () => {
  return (
    <div>
      <div className="blog-banner d-flex v-center h-center">
        <div className="join-video  w-100 h-100">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/assets/blog-banner.mp4"
            className="w-100 h-100 object-fit-cover"
          ></video>
        </div>
        <h5>Blogs</h5>
      </div>
    </div>
  );
};

export default BlogBanner;
