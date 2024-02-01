import React from "react";

const LazyLoadedImage = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
};

export default LazyLoadedImage;
