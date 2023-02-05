import React from "react";
import mobile from "../assets/story/mobile.png";
import web from "../assets/story/web.png";

const Story = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center mx-20">
      <div className="text-center text-5xl mb-20">Special skill</div>
      <div className="grid grid-flow-col gap-6">
        <div className="flex flex-col justify-center items-center">
          <img src={web} className="w-1/2" />
          <h1 className="text-2xl">Web Application Development</h1>
          <p className="text-sm">
            Currently using React and tailwind to develop front-end
            applications.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={mobile} className="w-1/2" />
          <h1 className="text-2xl">Mobile App Development</h1>
          <p className="text-sm">
            Currently using React Native to develop front-end.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
