import React from "react";
import babeG from "../assets/pastWork/babeG.png";
import cosmos from "../assets/pastWork/cosmos.png";

const PastWork = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center mx-20">
      <div className="text-center text-5xl mb-20">Past Work</div>
      <div className="grid grid-flow-row grid-col-2 laptop:grid-flow-col gap-4">
        <a href="https://babeg.io/" target="_blank">
          <img src={babeG} className="w-full" />
        </a>
        <div className="flex flex-col mt-10 laptop:mt-0">
          <p className="text-center text-3xl">BabeG Website</p>
          <p className="text-xl pt-6">
            BabeG is a collection of 5,000 unique ultra-realistic hand-drawn art
            pieces to honor those who take the game seriously!
          </p>
          <p className="text-xl pt-4">Technologies used: React</p>
          <p className="text-xl pt-4">Role played: Frontend</p>
        </div>
      </div>
      <div className="grid grid-flow-row grid-col-2 laptop:grid-flow-col gap-4 my-20">
        <a
          href="http://www.cosmosheroes.com/"
          target="_blank"
          className="laptop:col-start-2"
        >
          <img src={cosmos} className="w-full" />
        </a>
        <div className="flex flex-col mt-10 laptop:mt-0">
          <p className="text-center text-3xl">Cosmosheroes NFT website</p>
          <p className="text-xl pt-6">
            Cosmos Heroes is a blockchain company that aims to introduce a set
            of unique features that will revolutionize the existing GameFi
            industry.
          </p>
          <p className="text-xl pt-4">Technologies used: React, Tailwind</p>
          <p className="text-xl pt-4">Role played: Frontend</p>
        </div>
      </div>
    </section>
  );
};

export default PastWork;
