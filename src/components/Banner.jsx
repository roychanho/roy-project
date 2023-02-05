import React from "react";

const Banner = () => {
  return (
    <div className="sticky w-full h-96 bg-no-repeat bg-center bg-cover bg-[url('../assets/banner/banner.jpeg')]">
      <div className="h-full flex justify-center flex-col items-center">
        <p className="text-5xl text-center">Welcome to Roy Profile!</p>
      </div>
    </div>
  );
};

export default Banner;
